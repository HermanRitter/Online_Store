const {Type} = require('../models/models')
const ApiError = require('../error/errorApi')
const uuid = require("uuid");
const path = require("path");

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const {img1, img2} = req.files
        let fileName1 = uuid.v4() + ".jpg"
        let fileName2 = uuid.v4() + ".jpg"
        await img1.mv(path.resolve(__dirname, '..', 'static', fileName1))
        await img2.mv(path.resolve(__dirname, '..', 'static', fileName2))
        const type = await Type.create({name,   img1: fileName1, img2: fileName2})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()