const ProductModel = require('../models/products');

exports.get_products = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

exports.get_product = async (req, res) => {
    try {
        const product = await ProductModel.findOne({ _id: req.params.id })
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

exports.add_product = async (req, res) => {
    try {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(201).json("Successfully added product")
    } catch (error) {
        res.status(404).json(error.message)
    }
}

exports.delete_product = async (req, res) => {
    try {
        await ProductModel.deleteOne({ _id: req.params.id })
        res.status(200).json("Successfully deleted product")
    } catch (error) {
        res.status(404).json(error.message)
    }
}