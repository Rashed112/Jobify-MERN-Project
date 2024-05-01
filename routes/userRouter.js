import { Router } from 'express';
const router = Router();
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizePermissions,
  checkForTestUser,
} from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

router.route('/current-user').get(getCurrentUser);
router
  .route('/admin/app-stats')
  .get([authorizePermissions('admin'), getApplicationStats]);
router
  .route('/update-user')
  .patch(
    checkForTestUser,
    upload.single('avatar'),
    validateUpdateUserInput,
    updateUser
  );

export default router;
