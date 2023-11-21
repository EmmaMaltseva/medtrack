const Router = require('express')
const router = new Router()
const medicinesRouter = require('../controller/medicines.controller')


router.post('/medicines', medicinesRouter.createPost)
router.get('/medicines', medicinesRouter.getPostsByUser)
router.get('/medicines/:id', medicinesRouter.getOneMedicines)
router.put('/medicines', medicinesRouter.updateMedicicnes)
router.delete('/medicines/:id', medicinesRouter.deleteMedicines)


module.exports = router