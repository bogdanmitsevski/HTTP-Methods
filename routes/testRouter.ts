import express from 'express';
const router = express.Router();
import TestController from '../controllers/testController';

router.post('/users', TestController.postMethod);
router.get('/getall', TestController.getMethod);
router.put('/update', TestController.updateMethod);
router.delete('/delete', TestController.deleteMethod);

export default router;