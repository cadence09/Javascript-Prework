const express = require("express")
const app=express()
const port =3000;

const mailList={"name": "staff", "members": [ "talea@techtonica.org", "michelle@techtonica.org" ]
}
// const mailList=" ";

app.route("/lists").get((req,res)=>{
    if(mailList.length === 0 ){
    res.status(200).send("[]")
            }
    res.status(200).send(mailList.name)
})
// app.get('/lists', (req, res) => {
//     const listsArray = Array.from(mailList.name); // Why is this like this? Try it out in your console.
//     res.send(listsArray);
//   });
// app.get("/lists/:name", function(req,res){
//     res.status(200).send(mailList.name)
// }
app.route("/lists/:name").get(function(req,res){
    res.status(200).send(mailList.name)
})




app.listen(app.listen(port, function(){
    console.log(`app listening on port ${port}`)
}))