import express, {Router} from 'express'
import { getUsers, loginUser, register, singleUser } from '../controller/authController'

const router: Router = express.Router()

router.route('/').get(getUsers)
router.route('/register').post(register)
router.route('/login').post(loginUser)
router.route('/users/:id').get(singleUser)

export default router