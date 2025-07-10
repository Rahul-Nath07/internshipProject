const authCheck = require('../middlewares/Auth');

const router=require('express').Router();

router.get('/',authCheck,(req,res)=>{

    console.log("User details route accessed");
    res.status(200).json([
      {
        name: "John Doe",
        phone: "+1234567890",
      },
      {
        name: "Jane Smith",
        phone: "+0987654321",
      },
      {
        name: "Alice Johnson",
        phone: "+1122334455",
      },
      {
        name: "Bob Brown",
        phone: "+5566778899",
      }
    ]);
})





module.exports=router;