const { Router } = require('express');
const { Seeker } = require('../backend/models');
const { hashPassword, genToken, checkPassword } = require('../backend/auth');

const seekerRouter = Router();

// data seeker just typed in
const buildAuthResponse = seeker => {
    const token_data = {
        id: seeker.id,
        email:seeker.email
    }
    const jwt = genToken(token_data)
    return {jwt}
}

seekerRouter.post('/seeker/resgistration', async(req, res, next)=>{
    try{
        const password_digest = await hashPassword(req.body.password)
        const seeker = await Seeker.create({
            email: req.body.email,
            password_digest
          })
          const respData = buildAuthResponse(seeker);
          res.json(respData);
    }catch(e){
        next(e)
    }
})

seekerRouter.post('/seeker/signin', async(req, res, next)=>{
    try{
        const seeker = await Seeker.findOne({
            where:{
                email:req.body.email
            }
        })
        if(await checkPassword(req.boby.password, seeker.password_digest) ){
            const respData = buildAuthResponse(seeker);
            res.json({ ...respData })
        }else {
            res.status(401).send('Invalid Credentials');
          }
    }catch(e){
        next(e)
    }
}
)

module.exports = seekerRouter
