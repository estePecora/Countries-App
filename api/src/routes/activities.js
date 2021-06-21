const { Router } = require('express');
const { postActivity } = require('../Controllers/activities')
const router = Router();


router.post('/', postActivity)



module.exports = router;