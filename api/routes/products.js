const express = require('express');
const router = express.Router();

router.get('/products');

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'GET products'
    });
});
router.post('/',(req,res,next) => {
    res.status(200).json({
        message: 'POST products'
    });
});
router.put('/',(req,res,next) => {
    res.status(200).json({
        message: 'PUT products'
    });
});

router.get('/:productID',(req,res,next) => {
    const id = req.params.productID;
    if(id === 'iphoneX') {
    res.status(200).json({
        message: 'The product ID',
        id: id,
        details : json_file
    });
 } else {
    res.status(200).json({
        message: 'Find not found',
    });
}});

const json_file = {
    id: 'iphone X',
    price: '1000$',
    capability: '128GB'
}
module.exports = router;