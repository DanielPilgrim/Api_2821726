// const vehicule = require('../models/vehicule')
// const Vehicule = require('../models/vehicule')-----
import Vehicule from '../models/vehicule.js'
///////metodo get
export async function getVehicule(req,res) {
    const vehicules = await Vehicule.find()
    res.json(vehicules)
}
//////metodo post
export async function postVehicule(req,res) {
    let msg = 'vehicule inserted'
    const body =req.body
    try{
        const vehicule = new Vehicule(body)
        await vehicule.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}
/////metodo put
export async function putVehicule(req, res)  {
    let msg = 'vehicule updated'
    const {plate,color,model}=req.body
    try{
        await vehicule.findOneAndUpdate({plate:plate,color:color,model:model})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}
/////metodo delete
export async function deleteVehicule (req,res) {
    let msg = 'vehicule deleted'
    id = req.params.id
    try{
        await vehicule.findOneAndDelete({_id:id})
    }catch(error){
        msg = 'there was an error deleting'
    }
    res.json({msg:msg})
}
