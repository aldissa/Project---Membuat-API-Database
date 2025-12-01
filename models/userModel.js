const db = require('../config/db');

//async - wait
const getAllBooks = async () => {
    const [rows] = await db.query("select * from buku");
    return rows
};

const getBookByCode = async (code) => {
    const [row] = await db.query("select * from buku where kode_buku = ?", [code]);
    return row[0]
};

module.exports = {getAllBooks, getBookByCode};