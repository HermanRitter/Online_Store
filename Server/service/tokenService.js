const jwt = require("jsonwebtoken");
const {Tokens} = require('../models/models')

class TokenService {
    async generateJwt(id, email, role) {
        const accessToken = await jwt.sign({id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '1h'})
        const refreshToken = await jwt.sign({id, email, role},
            process.env.SECRET_REFRESH_TOKEN,
            {expiresIn: '24h'})
        return {
            accessToken,
            refreshToken
        }
    }

    async validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.SECRET_KEY)
            return userData
        } catch(e) {
            return null
        }
    }
    async validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.SECRET_REFRESH_TOKEN)
            return userData
        } catch(e) {
            return null
        }
    }

    async findToken(token) {
        const tokenData = await Tokens.findOne({where: {tokenRefresh: token}})
        return tokenData
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Tokens.findOne({where: {userId}})
        if (tokenData) {
            tokenData.tokenRefresh = refreshToken
            return tokenData.save()
        }
        const token = await Tokens.create({userId: userId, tokenRefresh: refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const tokenData = Tokens.destroy({where: {tokenRefresh: refreshToken}})
        return tokenData
    }
}

module.exports = new TokenService()