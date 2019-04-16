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

// giverRouter.post('/giver/resgistration', async(req, res, next)=>{
//     try{
//         const password_digest = await hashPassword(req.body.password)
//         const giver = await Giver.create({
//             email: req.body.email,
//             password_digest
//           })
//           const respData = buildAuthResponse(giver);
//           res.json(respData);
//     }catch(e){
//         res.json({message:e.message})
//     }
// })

giverRouter.post('/giver/signin', async(req, res, next)=>{
    console.log(req)
    try{
        const giver = await Giver.findOne({
            where:{
                email:req.body.email
            }
        })
        if(await checkPassword(req.body.password, giver.password_digest) ){
            const respData = buildAuthResponse(giver);
            res.json({ ...respData })
        }else {
            res.json({status:401});
          }
    }catch(e){
        res.json({message:e.message})
    }
})

module.exports = giverRouter
