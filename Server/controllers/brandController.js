const {Brand} = require("../models/models");
const uuid = require('uuid')
const path = require('path')

class BrandController {

    async create(req, res) {
        let {name, description} = req.body
        const {imgBrand, imgBrandHistory1, imgBrandHistory2, imgBrandHistory3, imgBrandHistory4} = req.files
        let fileNameBrand = uuid.v4() + ".jpg"
        let fileNameBrandHistory1 = uuid.v4() + ".jpg"
        let fileNameBrandHistory2 = uuid.v4() + ".jpg"
        let fileNameBrandHistory3 = uuid.v4() + ".jpg"
        let fileNameBrandHistory4 = uuid.v4() + ".jpg"

        await imgBrand.mv(path.resolve(__dirname, '..', 'static', fileNameBrand))
        await imgBrandHistory1.mv(path.resolve(__dirname, '..', 'static', fileNameBrandHistory1))
        await imgBrandHistory2.mv(path.resolve(__dirname, '..', 'static', fileNameBrandHistory2))
        await imgBrandHistory3.mv(path.resolve(__dirname, '..', 'static', fileNameBrandHistory3))
        await imgBrandHistory4.mv(path.resolve(__dirname, '..', 'static', fileNameBrandHistory4))
        const brand = await Brand.create({
            name, description, imgBrand: fileNameBrand,
            imgBrandHistory1: fileNameBrandHistory1,
            imgBrandHistory2: fileNameBrandHistory2,
            imgBrandHistory3: fileNameBrandHistory3,
            imgBrandHistory4: fileNameBrandHistory4
        })
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()