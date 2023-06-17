const sequelize = require('../db')
const {DataTypes} = require('sequelize')

//MODELS

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Tokens = sequelize.define('tokens', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tokenRefresh: {type: DataTypes.STRING, required: true},

})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    model: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.STRING, allowNull: false},
    drive: {type: DataTypes.STRING, allowNull: false},
    engine: {type: DataTypes.STRING, allowNull: false},
    wheel: {type: DataTypes.STRING, allowNull: false},
    more: {type: DataTypes.TEXT, allowNull: false},
    rating: {type: DataTypes.STRING, defaultValue: 0},
    img1: {type: DataTypes.STRING, allowNull: false},
    img2: {type: DataTypes.STRING, allowNull: false},
    img3: {type: DataTypes.STRING, allowNull: false},
    img4: {type: DataTypes.STRING, allowNull: false},
    img5: {type: DataTypes.STRING, allowNull: false},
    img6: {type: DataTypes.STRING, allowNull: false},
    img7: {type: DataTypes.STRING, allowNull: false},
    img8: {type: DataTypes.STRING, allowNull: false},
    img9: {type: DataTypes.STRING, allowNull: false},
    img10: {type: DataTypes.STRING, allowNull: false},
    imgColor: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img1: {type: DataTypes.STRING, allowNull: false},
    img2: {type: DataTypes.STRING, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT, unique: true, allowNull: false},
    imgBrand: {type: DataTypes.STRING, allowNull: false},
    imgBrandHistory1: {type: DataTypes.STRING, allowNull: false},
    imgBrandHistory2: {type: DataTypes.STRING, allowNull: false},
    imgBrandHistory3: {type: DataTypes.STRING, allowNull: false},
    imgBrandHistory4: {type: DataTypes.STRING, allowNull: false}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

//CONNECTION OF MODULES

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasOne(Tokens)
Tokens.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User,
    Tokens,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    DeviceInfo,
    TypeBrand,
}



