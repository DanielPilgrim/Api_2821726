const express = require('express');
const dbConnect = require('../database/config')
require('../database/config')
const {getVehicule,postVehicule} = require('../controllers/vehiculeController')
const {getOwner,postOwner} = require('../controllers/ownerController')

class Server {
    constructor(){
        this.app = express();
        this.dbConnection(); 
        this.pathVehicule = '/api/vehicule';
        this.pathOwner = '/api/owner';
        this.route();
        this.listen();
    }

    async dbConnection(){  //llamar la coneccion de la base de datos
        await dbConnect;
    }
    route(){
        this.app.use(express.json())
        this.app.get(this.pathVehicule, getVehicule)
        this.app.post(this.pathVehicule, postVehicule)
        //////////////////////////////////////////////////
        this.app.get(this.pathOwner, getOwner)
        this.app.post(this.pathOwner, postOwner)
    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('server is running')
        })
    }
}

module.exports = Server; // exportar la calse server

