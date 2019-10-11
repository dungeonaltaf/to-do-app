const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');



router.get('/contacts',function(req,res,next){
    Contact.find(function(err,contacts){
        res.json(contacts);
    });
});

router.post('/contact',function(req,res,next){
    console.log("saved function is called");
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.number);
        let newContact  = new Contact({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            phone: req.body.phone
        });
        newContact.save(function(err,contact){
            if(err){
                res.json({msg :"contact wasn't saved!"});
                console.log("Couldnt saved it");
            }
            else{
                res.json({msg:"contact saved"});
                console.log("Saved it");
            }
        })
});

router.delete('/contact/:id',function(req,res,next){
Contact.deleteOne({_id:req.params.id},function(err,result){
    if(err){
        res.json({statusText: "contact wasn't deleted"});
    }
    else{
        res.status(200);
    }
});

});

module.exports = router;