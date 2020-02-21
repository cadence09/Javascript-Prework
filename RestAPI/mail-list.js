const express = require("express")
const app=express()
const port =3000;
const bodyParser=require("body-parser")
// const mailList={"name": "staff", "members": [ "talea@techtonica.org", "michelle@techtonica.org" ]
// }
// const mailList=" ";

// app.route("/lists").get((req,res)=>{
//     if(mailList.length === 0 ){
//     res.status(200).send("[]")
//             }
//     res.status(200).send(mailList.name)
// })
// // app.get('/lists', (req, res) => {
// //     const listsArray = Array.from(mailList.name); // Why is this like this? Try it out in your console.
// //     res.send(listsArray);
// //   });
// // app.get("/lists/:name", function(req,res){
// //     res.status(200).send(mailList.name)
// // }
// app.route("/lists/:name").get(function(req,res){
//     res.status(200).send(mailList.name)
// })

app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("hello world")
   
})
const lists=new Map();
lists.set("staff", {
    name:"staff",
    members:[ "talea@techtonica.org", "michelle@techtonica.org" ]
})
console.log("staff is:", lists.get("staff"))
app.get("/lists", (req,res)=>{
    // console.log("body is :" req.body);
    // res.send("lists go here")
    let keys=lists.keys();
    let keysArr=[...keys];
    res.status(200).send(keysArr)
})
app.route("/lists/:name")
    .put((req,res)=>{
        let name=req.params.name;
        let dataName=req.body.name;
        let dataMembers=req.body.members;
        let newListItem=lists.get(name) || {};
        if(dataName){
            newListItem.name=name;
        }
        if((dataMembers){
            newListItem.members=members;
        })
        lists,set(name,newListItem)
    })

const server =app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})



// app.listen(app.listen(port, function(){
//     console.log(`app listening on port ${port}`)
// }))