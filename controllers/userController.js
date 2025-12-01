const userModel = require('../models/userModel');

const getAllbooks = async (req, res) => {
    try {
        const books = await userModel.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json(
            {
                message: "Error get all books",
                status: 500
            }
        );
    }
};

const getBookByCode = async (req, res) => {
    try {
        const book = await userModel.getBookByCode(req.params.code);

        if (!book) {
            return res.status(404).json(
                {
                    message: "Data not found"
                }
            );
        }
        res.json(book);
    } catch (error) {
        res.status(500).json(
            {
                message: error
            }
        );
    }
}

module.exports = {getAllbooks, getBookByCode};