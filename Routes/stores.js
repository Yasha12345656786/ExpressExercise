const express = require('express');
const path = require('node:path');


const StoresRouter = express.Router();

StoresRouter.get('/', async(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'db','stores.json'));
});

StoresRouter.get(`/:id`,async(req,res)=>{
    let {id} = req.params;
    let stores = path.join(__dirname,'db','stores.json');
    let store = stores.find((s)=>s.id == id);
    if(store)
    res.status(200).json(store);
    else
    res.status(404).josn({mas:"store not found"})

});
StoresRouter.get(`/:store/:product`,async (req,res)=>{
    let {name} = req.params;
    let {product} =  req.params;
    let stores = path.join(__dirname,'db','stores.json');
    let store = stores.find((s)=>s.name == name);
    store.find((p)=>p == product);
});
StoresRouter.post(`/add`,async (req,res)=>{
    try {
        let {id,name,city,ptoducts} = req.body;
        let stores = path.join(__dirname,'db','stores.json');
        let store = {id,name,city,ptoducts};
        stores.push(store);
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({error})
    }
});
StoresRouter.post(`/:store/products/add`, async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
});

module.exports = StoresRouter;