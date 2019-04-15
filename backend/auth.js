const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SALT_ROUNDS = 11;
const TOKEN_KEY = 'bananasplit';

<<<<<<< HEAD
async function hashPassword (password){
  const hashedPassword = await new Promise((resolve, reject) => {
bcrypt.hash(password, SALT_ROUNDS, function(err, hash){

})
  
})

const hashPassword = async (password) => {
    const digest = await bcrypt.hash(password, SALT_ROUNDS);
    return digest;
  }
=======
async function hashPassword (password) {

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT_ROUNDS, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hashedPassword
}
>>>>>>> c342fcdb9b247b0ba64d121247f89f8880d6b0b6

  const genToken = (seekerData) => {
    const token = jwt.sign(seekerData, TOKEN_KEY);
    return token;
  }

  async function checkPassword (password, password_digest) {

    const checkedPassword = await new Promise((resolve, reject) => {
        bcrypt.compare(password, password_digest)
          .then(function(res) {
            resolve(res)
          })
    })
    return checkedPassword
  }

  const restrict = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const data = jwt.verify(token, TOKEN_KEY);
      res.locals.user = data;
      next();
    } catch (e) {
      console.log(e);
      res.status(403).send('Unauthorized');
    }
  }


  module.exports = {
    hashPassword,
    checkPassword,
    genToken,
    restrict,
  };