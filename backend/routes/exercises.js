const router = require('express').Router();
let Grocery = require('../modals/exercise.modals');

router.get('/', (req, res) => {
    Grocery.find().then((item) => {
        res.json(item)
    }).catch((err) => {
        res.status(400).json('Error : ' + err)
    });
});

router.post('/add', (req, res) => {
    const productname = req.body.username;
    const notes = req.body.description;
    const quantity = req.body.duration;
    const date = Date.parse(req.body.date);

    const newProduct = new Grocery({
        productname,
        notes,
        quantity,
        date
    });

    newProduct.save().then(() => {
        res.json(' New Product added!!!');
    }).catch(err => {
        res.json('Error: ' + err);
    });
});

router.get('/:id', (req, res) => {
    Grocery.findById(req.params.id).then((item) => {
        res.json(item)
    }).catch((err) => {
        res.status(400).json('Error : ' + err)
    });
});

router.delete('/:id', (req, res) => {
    Grocery.findByIdAndDelete(req.params.id).then((item) => {
        res.json(' Item deleted!!!');
    }).catch((err) => {
        res.status(400).json('Error : ' + err)
    });
});

router.post('/update/:id', (req, res) => {
    Grocery.findById(req.params.id).then((exercises) => {
        exercises.productname = req.body.productname;
        exercises.notes = req.body.notes;
        exercises.quantity = Number(req.body.quantity);
        exercises.date = Date.parse(req.body.date);

        exercise.save().then(() => {
            res.json(' Product Updated!!!');
        }).catch(err => {
            res.json('Error: ' + err);
        });
    }).catch((err) => {
        res.status(400).json('Error : ' + err)
    });
});

module.exports = router;