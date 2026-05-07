const express = require(`express`)
const router = express.Router()
const fruits = require(`../controllers/fruits`)

router.get(`/`, fruits.index) //get since we are retrieving data
router.get(`/:name`, fruits.show )
router.post(`/`, fruits.create ) //post since we are adding data
router.patch(`/:name`, fruits.update) //patch since we are partically adding data (it already exists)
router.delete(`/:name`, fruits.destroy)

module.exports = router

