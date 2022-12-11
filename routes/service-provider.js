var express = require('express');
var router = express.Router();
const mail = require('../services/nodemailer')
const service = require('../services/services')
const {validate} = require('../validator/register')

router.post('/register', async function(req, res, next) {
   let {error} = validate(req.body)
   
   if(error){
      console.log("Error", error)
      return res.status(404).redirect('/error')
   }
   let existEmail = await service.findByEmail(req.body)
   
   if(existEmail){
      return res.status(409).redirect('/user-present')
   }

   let records = await service.insert(req.body)
   
   if(!records){
      return res.status(404).redirect('/error')
   }

   //async request
   mail.sendMail(records.fullName, records.email)
   .then(() => console.log("mail sent to user"))
   .catch(err => console.log("err has been occurred in user", err))

   mail.sendMailVetsKart(records.fullName, records.email, records.mobile, records.pincode)
   .then(() => console.log("mail sent to vetskart"))
   .catch(err => console.log("error has been in vetskart mail", err))
   //end of async request

   return res.status(200).redirect('/confirm')

});

module.exports = router;
