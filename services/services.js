const {Register} = require('../model/register')

module.exports.insert = async (data) => {
    const user = new Register();
    let {inputName, inputEmail, inputMobile, inputPincode} = data
   
    user.fullName = inputName.toLowerCase()
    user.email = inputEmail.toLowerCase()
    user.mobile = inputMobile.toLowerCase()
    user.pincode = inputPincode.toLowerCase()

    return user.save()
}

module.exports.findByEmail = async (data) => {
    let {inputEmail} = data
    
    return Register.findOne({email: inputEmail})
}