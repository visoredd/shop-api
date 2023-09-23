const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.find({city: req.params.id})
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    console.log(req.body)
    const alien = new Alien({
        city: req.body.city,
        company: req.body.company,
        product:req.body.product,
        price: req.body.price
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.company=req.body.company;
        alien.price=req.body.price;
        alien.product=req.body.product;
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findByIdAndDelete(req.params.id) 
        res.json(alien)   
    }catch(err){
        res.send('Error')
    }
})

module.exports = router