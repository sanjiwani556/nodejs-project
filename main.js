const express =require("express");
const Food =require("./public/array");
        console.log(Food);
const app =express();
app.use(express.json())

app.get("/users",(req,res)=>{
    res.send("Get users");
});
app.get("/api/users/foods",(req,res)=>{
    res.send(Food);
});

app.post("/api/users/foods",(req,res)=>{

    if(!req.body.fooddescription){
    res.status(400)
    res.send("fooddescription is require");
}
     const fname ={
     id: Food.length + 1,
     Dish: req.body.Dish,
     fooddescription: req.body.fooddescription,
 }
  Food.push(fname)
    res.json(fname)

    
});

app.put("/users/foods/:id",(req,res)=>{
let id = req.params.id
let Dish = req.body.Dish
let fooddescription =req.body.fooddescription

let index= Food.findIndex((Food)=>{
    return(Food.id==Number.parseInt(id))
})
 console.log(id,req.body ,index);

if(index>=0){
    let f1=Food[index]
     f1.Dish = Dish
     f1.fooddescription= fooddescription
    res.send(f1)

}else {
    res.status(404)
    res.end()
}


})

app.delete("/users/foods/:id",(req,res)=>{
let id = req.params.id
let index= Food.findIndex((Food)=>{

    return(Food.id==Number.parseInt(id))
})
console.log(id,req.body,index)

if(index>=0){
    let f1=Food[index]
    Food.splice(index,1)
    res.send(f1)

}else {
    res.status(404)
    res.end()
}


})

    

app.listen(3000,()=>console.log("Server running on port:3000")); 
