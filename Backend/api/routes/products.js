const express = require('express');
const router =express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling GET requests to directory /Products"
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:"Handling POST requests to directory /Products"
    });
});

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId; 
    if(id==='special'){
  res.status(200).json({
    message:'s',
    id:id
  })
    }
    else{
        res.status(200).json({
            message:'you passed id'
        });
    }
});

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Product Updated!!'
    }); 
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Product Deleted!!'
    });
});
module.exports=router;