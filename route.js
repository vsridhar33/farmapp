const router=require('express').Router();
const{createdetails,viewdetails}=require('./controller')

router.post('/createdetails',createdetails);
router.get('/viewdetails',viewdetails)



module.exports=router;