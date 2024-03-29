const express = require('express');
const getAll = require('../controllers/admin-controller')

const router = express.Router()



router.get('/students',(getAll.getAllStudents))
router.get('/contact',(getAll.getAllContact))
router.delete('/contact/delete/:id',(getAll.deleteContact))
router.get('/students/:id',(getAll.getSingleStudent))
router.delete('/students/delete/:id',(getAll.deletesingleData))
router.put('/students/update/:id',(getAll.updateData))
router.post('/post/service',(getAll.addservices))
router.get('/service/delete',(getAll.getAdmindata))
router.delete('/service/delete/:id',(getAll.deleteAdmindata))


module.exports = router