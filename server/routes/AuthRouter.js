const { signUpValidation, loginValidation } = require('../middlewares/AuthValidation');
const { signup,login }=require('../controllers/AuthController')
const router=require('express').Router();

router.post('/login',loginValidation,login)


router.post('/signup',signUpValidation,signup)


module.exports=router;