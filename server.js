const express = require( 'express' )
const { Router } = require('express');
const bodyParser = require( 'body-parser' )
const { hashPassword, genToken, checkPassword } = require('./backend/auth');
const giverRouter = Router();
const app = express()

const { Seeker, Giver, Message, Request, Review } = require( './backend/models' );
const PORT = process.env.PORT || 1234


const cors = require( 'cors' )
app.use( cors() )



app.use( "/", express.static( "./build/" ) );
app.use( bodyParser.json() )
app.use((e, req, res, next) => {
    if (e) {
      console.log(e);
      res.status(500).send(e.message)
    }
  })



// app.get( '/seeker/browse', async ( req, res ) => {
//     try {
//         const givers = await Giver.findAll( { raw: true } )
//         res.json( {
//             givers
//         } )
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )



// app.get( '/messages', async ( req, res ) => {
//     try {
//         const messages = await Message.findAll( { raw: true } )
//         res.json( {
//             messages
//         } )
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )


// app.get( '/seeker/:giverid/request', async ( req, res ) => {
//     try {
//         const requests = await Request.findAll( {
//             where: {
//                 seeker_id: req.params.seekerid,
//                 giver_id: req.params.giverid
//             }
//         } )
//         res.json( {
//             requests
//         } )
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )

// app.get( '/seeker/status', async ( req, res ) => {
//     try {
//         const requests = await Request.findAll( {
//             where: {
//                 seeker_id: req.params.seekerid
//             }
//         } )
//         res.json( {
//             requests
//         } )
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )

// app.get( '/seeker/:seekerid/search', async ( req, res ) => {
//     try {
//         const id = req.params.seekerid
//         const seeker = await Seeker.findByPk( id, { raw: true } )
//         if ( !seeker ) throw Error( 'seeker not found' )
//         res.json( seeker )
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )



// app.get( '/message/:seekerid', async ( req, res ) => {
//     try {
//         const id = req.params.seekerid
//         const message = await Message.findByPk( id, { raw: true } )
//         if ( !message ) throw Error( 'giver not found' )
//         res.json( message )
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )

// app.get( '/message/:giverid', async ( req, res ) => {
//     try {
//         const id = req.params.giverid
//         const message = await Message.findByPk( id, { raw: true } )
//         if ( !message ) throw Error( 'giver not found' )
//         res.json( message )
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )

// app.get( '/requests/:requestid', async ( req, res ) => {
//     try {
//         const id = req.params.requestid
//         const request = await Request.findByPk( id, { raw: true } )
//         if ( !request ) throw Error( 'giver not found' )
//         res.json( request )
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )

// app.post( 'seeker/registration', async ( req, res ) => {
//     console.log( req.body )
//     try {
//         const seeker = await Seeker.create( req.body )
//         res.json( seeker )
//     } catch ( e ) {
//         console.log( e )
//         res.status( 500 ).json( { message: e.message } )
//     }
// } )

// app.post( '/giver/registration', async ( req, res ) => {
//     console.log( req.body )
//     try {
//         const giver = await Giver.create( req.body )
//         res.json( giver )
//     } catch ( e ) {
//         console.log( e )
//         res.status( 500 ).json( { message: e.message } )
//     }
// } )



// app.post( '/messages', async ( req, res ) => {
//     console.log( req.body )
//     try {
//         const message = await Message.create( req.body )
//         res.json( message )
//     } catch ( e ) {
//         console.log( e )
//         res.status( 500 ).json( { message: e.message } )
//     }
// } )



app.post( '/giver/status', async ( req, res ) => {
    try {
        const requests = await Request.findAll( {
            where: {
                giver_id: req.body.id
            }
        } )
        res.json( {
            requests
        } )
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } )
    }
} )


app.post( '/giver', async ( req, res ) => {
    try {
        const giver = await Giver.findOne( {
            where: {
                email: req.body.email
            }
        } )
        res.json(giver)
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } )
    }
} )

// app.post( '/giver/status', async ( req, res ) => {
//     try {
//         const requests = await Request.findAll( {
//             where: {
//                 giver_id: req.body.id
//             }
//         } )
//         res.json(requests)
//     } catch ( e ) {
//         res.status( 500 ).json( {
//             message: e.message
//         } )
//     }
// } )


// data seeker just typed in
const buildAuthResponse = giver => {
    const token_data = {
        id: giver.id,
        email:giver.email
    }
    const jwt = genToken(token_data)
    return {jwt}
}

app.post('/giver/registration', async(req, res, next)=>{
    try{
        const password_digest = await hashPassword(req.body.password)
        console.log({email:req.body.email,password_digest});
        const giver = await Giver.create({
            email: req.body.email,
            password_digest
          })
          const respData = buildAuthResponse(giver);
          res.json(respData);
    }catch(e){
        res.json({message:e.message})
    }
})

app.post('/giver/signin', async(req, res, next)=>{
    console.log(req)
    try{
        const giver = await Giver.findOne({
            where:{
                email:req.body.email
            }
        })
        if(await checkPassword(req.body.password, giver.password_digest) ){
            const respData = buildAuthResponse(giver);
            console.log(respData)
            res.json({ ...respData, status:888 })
        }else{
            res.json({status:401});
        }
    }catch(e){
        res.json({message:e.message,status:233})
    }
})

app.post('/seeker/registration', async(req, res, next)=>{
    try{
        const password_digest = await hashPassword(req.body.password)
        const seeker = await Seeker.create({
            email: req.body.email,
            password_digest
          })
          const respData = buildAuthResponse(seeker);
          res.json(respData);
    }catch(e){
        res.json({message:e.message})
    }
})



app.listen(PORT, () => {
    console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
  })
