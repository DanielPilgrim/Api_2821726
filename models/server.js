import express, { json } from 'express';
import dbConnect from '../database/config.js';
import '../database/config.js';

import userRouter from '../routes/userRoute.js';
import vehiculeRouter from '../routes/vehiculeRoute.js';
import { getOwner, postOwner } from '../controllers/ownerController.js';

class Server {
    constructor(){
        this.app = express();
        this.dbConnection(); 
        this.pathUser = '/api/user';
        this.pathVehicule = '/api/vehicule';
        this.pathOwner = '/api/owner';
        this.route();
        this.listen();
    }

    async dbConnection(){  //llamar la coneccion de la base de datos
        await dbConnect();
    }
    route(){
        this.app.use(json())
        // this.app.get(this.pathVehicule, getVehicule)
        // this.app.post(this.pathVehicule, postVehicule)
        this.app.use(this.pathVehicule, vehiculeRouter)

        this.app.use(this.pathUser, userRouter)
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

export default Server; // exportar la calse server

