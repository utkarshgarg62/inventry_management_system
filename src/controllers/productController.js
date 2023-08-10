const productModel = require('../models/productModel');

const createProduct = async function (req, res) {
    let data = req.body
    let savedata = await productModel.create(data)
    return res.status(201).send({ status: true, message: 'products created successfully', data: savedata })
}

const getProduct = async function (req, res) {
    let data = req.query
    let findProduct = await productModel.find({ isDeleted: false })
    if (findProduct) {
        return res.status(200).send({ status: true, message: "Success", data: findProduct })
    }
    else {
        return res.status(404).send({ status: false, message: "No products found with this query" })
    }
}

const updateProduct = async function (req, res) {

    let productId = req.params.productId
    let checkproduct = await productModel.findById({ _id: productId })
    if (!checkproduct) { return res.status(404).send({ status: false, message: "product not found" }) }
    let productdata = req.body
    let UpdateProductData = await productModel.findOneAndUpdate({ _id: productId }, productdata, { new: true })
    return res.status(201).send({ status: true, message: "product Updated", productdata: UpdateProductData })
}

const deleteProduct = async function (req, res) {
    try {
        let ProductId = req.params.productId
        let date = new Date()

        let Product = await productModel.findOne({ _id: ProductId, isDeleted: false })
        if (!Product) { return res.status(404).send({ status: false, message: "Product not exist in DB" }) }
        let check = await productModel.findOneAndUpdate({ _id: ProductId }, { isDeleted: true, deletedAt: date }, { new: true })
        return res.status(200).send({ status: true, message: "success", data: check })

    } catch (err) {
        res.status(500).send({ status: false, message: err })
    }
}

module.exports = { createProduct, getProduct, updateProduct ,deleteProduct}