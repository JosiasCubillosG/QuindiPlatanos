const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.json({
        Status: "Api works"
    })
})

module.exports = router;