const express = require('express')
const router = express.Router()
const{
    createNewAgency,
    getOwnerId,
}
    =
    require('../controller/AgencyController')

//get owner id 
router.get('/:AgencyName',getOwnerId);

//get creates newagency 
router.post('/newAgency',createNewAgency)

module.exports = router