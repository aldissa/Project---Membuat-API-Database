const express = require('express'); //untuk membuat router
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllbooks);
router.get('/:code', userController.getBookByCode);
router.post('/', userController.addBook);
router.delete('/:code', userController.delBook);
router.put('/:code', userController.updateBook);

module.exports = router;