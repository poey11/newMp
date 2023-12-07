const mongoose = require('mongoose')
const Agency = require('../models/Agency.js')

const createNewAgency=async(req,res)=>{
    const {AgencyName }=req.body;
    console.log(req.body)
    try{
        const agency = await Agency.create({
            AgencyName,
            AgencyOwner:''
        })
        console.log(agency)
        res.status(200).json(agency);
    }
    catch(e){
        res.status(400).json({e: e.message});
      }
}

const getOwnerId = async(req,res)=>{
    const { AgencyName } = req.params;
    try{
        const agency = await Agency.findOne({ AgencyName: AgencyName });
        return res.status(201).json(agency)
    }
    catch(e){
        return res.status(401).json({ error: 'Internal Server Error' })
    }

}




module.exports={
    createNewAgency,
    getOwnerId,
    
  }