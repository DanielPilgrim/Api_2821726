// const Owner = require('../models/owner')
import Owner from '../models/owner.js'

export async function getOwner(req,res) {
    const owners = await Owner.find()
    res.json(owners)
}

export async function postOwner(req,res) {
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
