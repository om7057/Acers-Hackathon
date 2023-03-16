const express = require('express');
const router =express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling GET requests to directory /Products"
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling POST requests to directory /Products"
    });
});

module.exports=router;