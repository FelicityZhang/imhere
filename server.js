const express = require( 'express' )
const bodyParser = require( 'body-parser' )
// const cors = require( 'cors' )

const app = express()

const { Seeker, Giver, Message, Request, Review } = require( './backend/models' );
const PORT = process.env.PORT || 1234

// app.use( cors() )
app.use( "/", express.static( "./build/" ) );
app.use( bodyParser.json() )

app.get( '/seeker/:seekerid/browse', async ( req, res ) => {
    try {
        const givers = await Giver.findAll( { raw: true } )
        res.json( {
            givers
        } )
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } )
    }
} )



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


app.get( '/seeker/:seekerid/search/:giverid/request', async ( req, res ) => {
    try {
        const requests = await Request.findAll( {
            where: {
                seeker_id: req.params.seekerid,
                giver_id: req.params.giverid
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

app.get( '/seeker/:seekerid/status', async ( req, res ) => {
    try {
        const requests = await Request.findAll( {
            where: {
                seeker_id: req.params.seekerid
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

app.get( '/giver/:giverid/status', async ( req, res ) => {
    try {
        const requests = await Request.findAll( {
            where: {
                giver_id: req.params.giverid
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

app.get( '/seeker/:seekerid/search', async ( req, res ) => {
    try {
        const id = req.params.seekerid
        const seeker = await Seeker.findByPk( id, { raw: true } )
        if ( !seeker ) throw Error( 'seeker not found' )
        res.json( seeker )
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } )
    }
} )



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

app.post( 'seeker/registration', async ( req, res ) => {
    console.log( req.body )
    try {
        const seeker = await Seeker.create( req.body )
        res.json( seeker )
    } catch ( e ) {
        console.log( e )
        res.status( 500 ).json( { message: e.message } )
    }
} )

app.post( '/giver/registration', async ( req, res ) => {
    console.log( req.body )
    try {
        const giver = await Giver.create( req.body )
        res.json( giver )
    } catch ( e ) {
        console.log( e )
        res.status( 500 ).json( { message: e.message } )
    }
} )



app.post( '/messages', async ( req, res ) => {
    console.log( req.body )
    try {
        const message = await Message.create( req.body )
        res.json( message )
    } catch ( e ) {
        console.log( e )
        res.status( 500 ).json( { message: e.message } )
    }
} )

