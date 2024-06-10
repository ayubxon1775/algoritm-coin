const { Router } = require('express');
const mentorController = require('../controllers/mentorController');
const { isAdmin } = require('../middlewares/authMiddleware');

const router = Router();

router.get('/', isAdmin, mentorController.getAllTeachers);
router.get('/:id', isAdmin, mentorController.getTeacherWithPupils);
router.post('/create-mentor', isAdmin, mentorController.createMentor);
router.put('/update-mentor/:id', isAdmin, mentorController.updateMentor);
router.delete('/delete-mentor/:id', isAdmin, mentorController.deleteMentor);

module.exports = router;

