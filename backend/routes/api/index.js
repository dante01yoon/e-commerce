const router = require('express').Router();
const authMiddleware = require('../../middlewares/auth');
const auth = require('./auth');
const user = require('./user');

router.use('/auth', auth);
router.use('/user', authMiddleware); 
router.use('/user', user); 
router.get('/', function(req,res){
  res.send('hello api');
})
module.exports = router;  