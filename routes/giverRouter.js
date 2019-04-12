const { Router } = require('express');
const { Giver } = require('../backend/models');
const { hashPassword, genToken, checkPassword } = require('../backend/auth');


const giverRouter = Router();

// data seeker just typed in
const buildAuthResponse = giver => {
    const token_data = {
        id: giver.id,
        email:giver.email
    }
    const jwt = genToken(token_data)
    return {jwt}
}

giverRouter.post('/giver/resgistration', async(req, res, next)=>{
    try{
        const password_digest = await hashPassword(req.body.password)
        const giver = await Giver.create({
            email: req.body.email,
            password_digest
          })
          const respData = buildAuthResponse(giver);
          res.json(respData);
    }catch(e){
        next(e)
    }
})

giverRouter.post('/giver/signin', async(req, res, next)=>{
    try{
        const giver = await Giver.findOne({
            where:{
                email:req.body.email
            }
        })
        if(await checkPassword(req.boby.password, giver.password_digest) ){
            const respData = buildAuthResponse(giver);
            res.json({ ...respData })
        }else {
            res.status(401).send('Invalid Credentials');
          }
    }catch(e){
        next(e)
    }
}
)

module.exports = giverRouter
