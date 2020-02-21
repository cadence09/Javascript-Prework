const express = require("express")
const app=express()
const {EventRecommender, User, Event}= require("./eventonica")
const port =3000;


//testing
// app.get("/", (req,res)=>res.send("Hello hooo"))
// app.listen(port, ()=> console.log(`Example app listening on port ${port}`));aa

// app.post("/", (req,res)=>{
//     res.send('success')
// })

// app.put("/", function(req,res){
//     res.send("send")
// })

let user=new User("Kate", 123)
console.log(user)


app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})


