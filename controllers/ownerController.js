const Owner = require('../models/owner')

const getOwner = async(req,res) => {
    const owners = await Owner.find()
    res.json(owners)
}

const postOwner = async(req,res) => {
    let msg = 'owner inserted'
    const body =req.body
    try{
        const owner = new Owner(body)
        await owner.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getOwner,
    postOwner
}