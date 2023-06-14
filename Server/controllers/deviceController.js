const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/errorApi')
const {where} = require("sequelize");

class DeviceController {
    async create(req, res, next) {
        try {
            // если в след строке написать const то =>
            let {
                name, model, price, brandId,
                typeId, info, year, body,
                drive, engine, wheel, more
            } = req.body
            const {
                img1, img2, img3, img4, img5,
                img6, img7, img8, img9, img10, imgColor
            } = req.files
            let fileName1 = uuid.v4() + ".jpg"
            let fileName2 = uuid.v4() + ".jpg"
            let fileName3 = uuid.v4() + ".jpg"
            let fileName4 = uuid.v4() + ".jpg"
            let fileName5 = uuid.v4() + ".jpg"
            let fileName6 = uuid.v4() + ".jpg"
            let fileName7 = uuid.v4() + ".jpg"
            let fileName8 = uuid.v4() + ".jpg"
            let fileName9 = uuid.v4() + ".jpg"
            let fileName10 = uuid.v4() + ".jpg"
            let fileNameColor = uuid.v4() + ".jpg"

            await img1.mv(path.resolve(__dirname, '..', 'static', fileName1))
            await img2.mv(path.resolve(__dirname, '..', 'static', fileName2))
            await img3.mv(path.resolve(__dirname, '..', 'static', fileName3))
            await img4.mv(path.resolve(__dirname, '..', 'static', fileName4))
            await img5.mv(path.resolve(__dirname, '..', 'static', fileName5))
            await img6.mv(path.resolve(__dirname, '..', 'static', fileName6))
            await img7.mv(path.resolve(__dirname, '..', 'static', fileName7))
            await img8.mv(path.resolve(__dirname, '..', 'static', fileName8))
            await img9.mv(path.resolve(__dirname, '..', 'static', fileName9))
            await img10.mv(path.resolve(__dirname, '..', 'static', fileName10))
            await imgColor.mv(path.resolve(__dirname, '..', 'static', fileNameColor))
            const device = await Device.create(
                {
                    name, model, price, brandId, typeId,
                    year, body, drive, engine, wheel, more,
                    img1: fileName1, img2: fileName2,
                    img3: fileName3, img4: fileName4,
                    img5: fileName5, img6: fileName6,
                    img7: fileName7, img8: fileName8,
                    img9: fileName9, img10: fileName10,
                    imgColor: fileNameColor
                })

            // => то здесь нельзя будет так перезадовать переменную
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                })

            }

            return res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }

        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }

        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }

        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()