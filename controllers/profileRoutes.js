const router = require('express').Router();


//http://localhost:3001/profile/admin
router.get("/admin", (req,res)=>{

 res.render('admin',{users:"Phil", roles:"administrator"})
})


//http://localhost:3001/profile/user

router.get("/user", (req,res)=>{

})
module.exports=router