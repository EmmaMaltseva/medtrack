const Router = require('express')
const router = new Router()
const medicinesRouter = require('../controller/medicines.controller')

router.post('/medicines', medicinesRouter.createPost)
router.get('/medicines', medicinesRouter.getPostsByUser)


module.exports = router