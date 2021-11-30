const router = require('express').Router();
let Product = require('../modals/users.modals');

router.get('/', (req, res) => {
    Product.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        res.status(400).json('Error : ' + err)
    });
});

router.post('/add', (req, res) => {
    const productname = req.body.productname;
    const newproduct = new Product({ productname });

    newproduct.save().then(() => {
        res.json(newproduct + ' product added!!!');
    }).catch(err => {
        res.json('Error: ' + err);
    });
});


module.exports = router;