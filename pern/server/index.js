const express=require("express")
const app=express();
const bodyParser=require('body-parser');
const port=3001;

var pgp=require('pg-promise')(/*option*/);
var db=pgp('postgres://postgres:thanhcaden@localhost:5433/PERN');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/getSpecies", function(req,res){
    db.any("SELECT *FROM species")
        .then((data)=>{
            console.log("what is the list",data);
            res.send(data)
        })
        .catch(error =>{
            console.log("error",error)
        })
});

app.get("/getAnimals", function(req,res){
    db.any("SELECT * FROM animals")
        .then((data)=>{
            res.send(data)
        })
        .catch(error=>{
            console.log("error",error)
        })
})

app.post("/addSigthing", function(req,res){
    console.log(req.body)
    let value=[
        req.body.id,
        req.body.seen,
        req.body.location,
        req.body.health,
        req.body.email,
]
    db.none("INSERT INTO sightings (animal_id,individual_seen,location,healthCondition,email) VALUES ($1,$2,$3,$4,$5)",value)
        .then(()=>{
            console.log("success")
        })
        .catch(error=>{
            console.log("error",error)
        })
})

app.get("/listSighting", function(req,res){
    let join="SELECT sightings.individual_seen,animals.species,sightings.location,sightings.healthCondition,sightings.email FROM sightings INNER JOIN animals ON sightings.animal_id=animals.animals_id"
    db.query(join,function(err,result){
            if (err) throw err;
            console.log(result);
    })
})



    //     .then(()=>{
    //         console.log("successfully join two table")
    //     })
    //     .catch(error=>{
    //         console.log("error",error)
    //     })


app.listen(port, function(){
    console.log(`app listening on port ${port}`)
});

