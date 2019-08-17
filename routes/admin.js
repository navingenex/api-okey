const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
    res.send(
        `
        <form actiom='/product' method="POST" class="form-inline">
    <div class="form-group">
        <label for=""></label>
        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
        <small id="helpId" class="text-muted">Help text</small>
    </div>
    <button type="submit" class="btn btn-primary"> send</button>
</form>`
    );
});

router.post('/product', (req, res) => {
    console.log(req.body);
     res.redirect('/');
});

module.exports=router;
