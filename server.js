/// console.log('server file is running');
// function add(a,b){
//     return a+b;
// }
// var res=add(7,6);
// console.log(res);


// (function(){
//     console.log('saini');

// })();


// function callback(){
//     console.log('daksh is calling a callback functon');


// }
// const add=function(a,b,callback){
//     var res=a+b;
//     console.log('result'+res);
//     callback();

// }

// add(9,6,callback )

// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>{
//     console.log('file is createed');

// })

// const notes=require('./notes.js');
// console.log('saini');
// var age=notes.age;
// console.log(age);

//server bna rhe hai
const express = require('express')
const app = express()
const db = require('./db')


const bodyParser=require('body-parser');
app.use(bodyParser.json());  //req body



app.get('/', function (req, res) {
  res.send('Welcome to my hotel......how can i help u?')
});
// app.get('/paneer', function (req, res) {
//     var cuso={
//         name:'panner tikka',
//         quantity:'2 bowls',
//         is_curd:true
//     }
//     res.send(cuso)
//   })

  // app.get('/person',async(req,res)=>{
  //   try{
    
  //       const response=await person.find();
  //       console.log('data fetched');
  //       res.status(200).json(response);
        
      
     
  //   }
  //   catch(err){
  //     console.log(err);
  //     res.status(500).json({error:'internal server error'});
  //   }
  // })

  // app.get('/person/:workType',async(req,res)=>{
  //   try{
  //     const workType=req.params.workType;
  //     if(workType=='chef' || workType=='manager' || workType=='waiter'){
  //       const response=await person.find({work:workType});
  //       console.log('responsed fetched');
  //       res.status(200).json(response);
        
  //     }
  //     else{
  //       res.status(404).json({error:'Invalid Work Type'});
  //     }
  //   }
  //   catch(err){
  //     console.log(err);
  //     res.status(500).json({error:'internal server error'});
  //   }
  // })


//Import the router files
 const personroutes=require('./routes/personRoutes')

//USE THE ROUTES
app.use('/person',personroutes);

app.listen(3001, () => {
  console.log('listening on port 3001');

})