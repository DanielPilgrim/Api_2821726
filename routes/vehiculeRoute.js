import router from 'express'
import { getVehicule, postVehicule } from '../controllers/vehiculeController.js';

const vehiculeRouter = router();

vehiculeRouter.get('/',getVehicule)
vehiculeRouter.post('/',postVehicule)
// vehiculeRouter.delete('/.id',deletetVehicule)

export default vehiculeRouter;