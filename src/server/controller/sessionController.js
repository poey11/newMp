

const  getSessionAuth = async (req,res) =>{
    const reply = req.session
    if(!reply.authenticated){
        return  res.status(401).json({error: 'Session is destroy'});
    }
    else{
        return res.status(201).json(reply.authenticated)
    }
}
const  getSessionUserId = async (req,res) =>{
    const reply=  req.session;
      
    if(!reply.authenticated){
        return  res.status(401).json({error: 'Session is destroy'});
    }
    else{
        return res.status(201).json(reply.userId)
    }
}

module.exports ={
    getSessionAuth,
    getSessionUserId
}