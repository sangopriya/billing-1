const router = require('express').Router();
const { addAmount }=require('../Controllers/carAmtController')

router.post('/added',addAmount.add);
router.get('/getamount',addAmount.getamount)
router.put('/updateamount',addAmount.updateamount)

module.exports = router