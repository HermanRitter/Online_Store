const ApiError = require('../error/errorApi')
const bcrypt = require('bcrypt')
const {User, Basket, Tokens} = require('../models/models')
const tokenService = require('../service/tokenService')


class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Incorrect email or password'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('User already exists'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, role, password: hashPassword})
            const basket = await Basket.create({userId: user.id})
            const tokens = await tokenService.generateJwt(user.id, email, user.role)
            await tokenService.saveToken(user.id, tokens.refreshToken)

            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json({
                tokens,
                user
            })
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('User is not found'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return next(ApiError.internal('invalid password specified'))
            }
            const tokens = await tokenService.generateJwt(user.id, user.email, user.role)
            await tokenService.saveToken(user.id, tokens.refreshToken)
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({tokens, user})
        } catch (e) {
            console.log(e)
        }

    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            console.log(req)
            const token = await tokenService.removeToken(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            console.log(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies

            if (!refreshToken) {
                return next(ApiError.internal('User isn\'t authorized'))
            }
            const userData = await tokenService.validateRefreshToken(refreshToken)
            const tokenFromDb = await tokenService.findToken(refreshToken)
            if (!userData && !tokenFromDb) {
                return next(ApiError.internal('User isn\'t authorized'))
            }
            const user = await User.findOne({where: {id: userData.id}})
            console.log(res)
            const tokens = await tokenService.generateJwt(user.id, user.email, user.role)

            await tokenService.saveToken(user.id, tokens.refreshToken)
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({tokens, user})
        } catch (e) {
            console.log(e)
        }
    }

    async check(req, res, next) {
        try {
            const tokens = await tokenService.generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({tokens})
        } catch(e) {
            return next(ApiError.internal('User isn\'t authorized'))
        }
    }
}

module.exports = new UserController()