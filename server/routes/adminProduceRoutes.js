import express from 'express';
import { createProduce, deleteProduce, editProduce, getAllProduce } from '../controllers/adminProduceController.js';
import { uploadProduceImages, handleUploadErrors } from '../middleware/uploadMiddleware.js';
import { adminAuthenticate } from '../middleware/adminAuthMiddleware.js';

const adminProduceRouter = express.Router();

// Route to create a new produce item with image uploads
adminProduceRouter.post('/', adminAuthenticate, uploadProduceImages, handleUploadErrors, createProduce);
adminProduceRouter.get('/', adminAuthenticate, getAllProduce);
adminProduceRouter.delete('/', adminAuthenticate, deleteProduce);
adminProduceRouter.patch('/', adminAuthenticate, uploadProduceImages, handleUploadErrors, editProduce);


export default adminProduceRouter;