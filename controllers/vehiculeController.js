const Vehicule = require('../models/vehicule')

const getVehicule = async(req,res) => {
    const vehicules = await Vehicule.find()
    res.json(vehicules)
}

const postVehicule = async(req,res) => {
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

const putVehicule = async(req, res) => {
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

module.exports = {
    getVehicule,
    postVehicule,
    putVehicule
}