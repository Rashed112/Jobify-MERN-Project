import { Router } from 'express';
const router = Router();
import { login, logout, register } from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';

router.route('/register').post(validateRegisterInput, register);
router.route('/login').post(validateLoginInput, login);
router.route('/logout').get(logout);

export default router;
