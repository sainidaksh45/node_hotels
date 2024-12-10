const express=require('express');
const router=express.Router();
const person=require('./../models/person');


//POST METHOD TO POST THE PERSON DETAILS
router.post('/',async(req,res)=>{
  
     try{
      const data =req.body
     const newperson=new person(data);
     const respone =await newperson.save();
    console.log('data saved');
    res.status(200).json(respone);
  
       
  
     }
     catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
      
  }
})


//GET METHOD TO FIND THE PERSON DETAILS
router.get('/',async(req,res)=>{
    try{
    
        const response=await person.find();
        console.log('data fetched');
        res.status(200).json(response);
        
      
     
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })

  //GET METHOD TO FIND THE TYPE OF WORK IN PERSON
  router.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=='chef' || workType=='manager' || workType=='waiter'){
        const response=await person.find({work:workType});
        console.log('responsed fetched');
        res.status(200).json(response);
        
      }
      else{
        res.status(404).json({error:'Invalid Work Type'});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })

 

  router.put('/:id',async(req,res)=>{
    try{
      const personid=req.params.id;
      const updatepersondata=req.body;

      const response=await person.findByIdAndUpdate(personid,updatepersondata,{
        new:true,//return the updated document
        runValidators:true,//run mongoose validation
      })

      if(!response){
        return res.status(404).json({error:'person not found'});
      }
      console.log('data updated');
      res.status(200).json(response);
      

    }
    catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
    
    }
  })

  router.delete('/:id',async(req,res)=>{
    try{
      const personid=req.params.id;

      //assuming you have a person model
      const response=await person.findByIdAndDelete(personid);
      if(!response){
        return res.status(404).json({error:'person not found'});
      }
      console.log('data delete');
      res.status(200).json({message:'person deleted '})
      

    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })
  //commente added

  module.exports=router;


