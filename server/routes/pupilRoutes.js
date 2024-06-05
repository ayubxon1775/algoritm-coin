const { Router} = require ('express');
const pupilController = require('../controllers/pupilController');

const router = Router();

router.post('/create-pupil', pupilController.createrPupil);
router.get('/pupil/:id', pupilController.getPupil);
router.put('/update-pupil/:id', pupilController.updatePupil);
router.delete('/delete-pupil/:id', pupilController.deletePupil);

module.exports = router;