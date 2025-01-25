const express=require("express");

const router=express.Router();

const Employees=require("../models/employee");

router.get("/test",(req,res)=>res.send("Employee routes is working"));

router.post("/",(req,res)=>{
    Employees.create(req.body)
    .then (()=>res.json({msg:"Employee added successfully"}))
    .catch(()=>res.status(400).json({msg:"Employee adding faileed"}));
});

router.get("/",(req,res)=>{
    Employees.find()
    .then((employees)=>res.json(employees))
    .catch(()=>res.status(400).json({msg:"no employees found"}));


});

router.get("/:id",(req,res)=>{
    Employees.findById(req.params.id)
    .then((employees)=>res.json(employees))
    .catch(()=>res.status(400).json({msg:"can not find this employee"}));

});

router.put("/:id",(req,res)=>{
    Employees.findByIdAndUpdate(req.params.id,req.body).then(()=>
    res
        .json({msg:"Update successfully"})
    .catch(()=>res.status(400).json({msg:"Update failed"})));
});

router.delete("/:id",(req,res)=>{
    Employees.findByIdAndDelete(req.params.id).then(()=>
    res.json({msg:"Deleted successfully"})
.catch(()=>res.status(400).json({msg:"cannot be deleted"})));

});


module.exports=router;
