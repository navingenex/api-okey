const express = require('express');

const router = express.Router();
router.get('/getData', (req, res) => {
    res.status(200).send({data:'asasa'});
});

module.exports=router;