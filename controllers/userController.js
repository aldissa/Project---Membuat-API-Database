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

const addBook = async(req, res) => {
    const {kode, judul, pengarang, penerbit} = req.body;
    let isKode = true;
    let isJudul = true;
    let msg = ""

    if (!kode) {
        msg = msg + "Kode wajib diisi\n";
        isKode = false;
    }

    if (!judul) {
        msg = msg + "Judul wajib diisi\n";
        isJudul = false;
    }

    if (isKode && isJudul) {
        try {
            const affected = await userModel.addBook(req.body);

            if (affected == 1) {
                res.status(200).json({
                    msg : "Insert Successful",
                    data : {...req.body}
                });
            }
        } catch (error) {
            res.status(400).json({
                message : error
            });
        }
    } else {
        res.status(400).json({msg:msg});
    }

}

const delBook = async (req, res) => {
    try {
        const result = await userModel.delBook(req.params.code);

        if (result == 1) {
            res.status(200).json({msg:"Delete is Successful"});
        } else {
            res.status(400).json({msg:"Failed"})
        }
    } catch (error) {
        res.status(400).json({msg:error});
    }
}

const updateBook = async (req, res) => {
    const {judul, pengarang, penerbit} = req.body;

    let isJudul = true;
    let msg = "";

    if (!judul) {
        msg = msg + "Judul wajib diisi\n";
        isJudul = false;
    }

    if (isJudul) {
        try {
            const affected = await userModel.updateBook(req.params.code, req.body);
            if (affected == 1) {
                res.status(200).json({
                    msg: "Update Successful",
                    data: {...req.body}
                });
            } else {
                res.status(400).json({msg: "Update Failed"});
            }

        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    }
}

module.exports = {getAllbooks, getBookByCode, addBook, delBook, updateBook};