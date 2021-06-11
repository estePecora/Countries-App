const { Router } = require('express');
const { postActivity } = require('../Controllers/activities')
const router = Router();


// router.get('/', getActivities);

router.post('/', postActivity)



module.exports = router;