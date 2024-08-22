import router from 'express'
import { postUser } from '../controllers/userController.js';

const userRouter = router();

userRouter.post('/',postUser)

export default userRouter;