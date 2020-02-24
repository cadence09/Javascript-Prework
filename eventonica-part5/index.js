const express = require("express")
const app=express()
const {EventRecommender, User, Event}= require("./static_files/eventonica")
const bodyParser = require('body-parser');
const port =3000;

app.use(bodyParser.json());
app.use(express.static("static_files"))

const eventRecommender = new EventRecommender(); 
app.post("/users", function(req,res){
   console.log(eventRecommender.users.newUser)
    let newUsers=req.body
        // eventRecommender.addUser(addNewUser,addId);
   res.send(newUsers)
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


