const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController.js')
const multer = require('multer')
const diskStorage = require('../middleware/multer.js')

router.post("/", movieController.create)
router.get("/", movieController.findAll)
router.get("/:id", movieController.findOne)
router.put("/:id", movieController.update)
router.delete("/:id", movieController.delete)
router.put("/upload/:id", multer({storage: diskStorage}).single("image"), movieController.uploadImage)

module.exports = router;