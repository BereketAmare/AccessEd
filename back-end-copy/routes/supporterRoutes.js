const { Router } = require('express')

const supporterController = require('../controllers/supporterController')

const router = Router()


router.post('/createsupporter', supporterController.createSupport)
router.get('/gettopfive', supporterController.gettop)
// router.get('/getall', fbController.getall)
// router.post('/getall', fbController.getall)

module.exports = router