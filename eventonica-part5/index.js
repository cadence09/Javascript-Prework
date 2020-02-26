const express = require("express")
const app=express()
const {EventRecommender, User, Event}= require("./static_files/eventonica")
const bodyParser = require('body-parser');
const port =3000;

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(express.static("static_files"))

const eventRecommender = new EventRecommender(); 
app.post("/users", function(req,res){
    console.log(`what is in the req ${(req.body.id)}`) 
    console.log(`what is in the body ${JSON.stringify(req.body)}`) 

    let newUsers=JSON.stringify(req.body)
        eventRecommender.addUser(req.body.newUser ,req.body.id);
        // console.log('eventRecommender.users ', eventRecommender.users)
   res.send(newUsers) //{id: 3, newUser: 'eee'}
  
})

//testing
// app.get("/", (req,res)=>res.send("Hello hooo"))
// app.listen(port, ()=> console.log(`Example app listening on port ${port}`));aa

// app.post("/", (req,res)=>{
//     res.send('success')
// })

// app.put("/", function(req,res){
//     res.send("send")
// })


// app.use(express.static("/eventonica-part5"))
// let recommender=new EventRecommender();
// recommender.addUser("Kate", 123)
// console.log(recommender.users)

// app.get("/users", function(req,res){
//     res.send(recommender.users)
// })





app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})


