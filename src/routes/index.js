const express = require('express');
const router = express.Router();
const mail = require('../services/mails/mials.service');

/* GET home page. */
router.post('/sendmail', async function(req, res, next) {
    const result = await mail.sendCurrentMail(req.body);
    res.send(result);
});

module.exports = router;