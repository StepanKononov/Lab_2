import {Router} from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

router.post('/products', ProductController.createProduct);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);
router.get('/products/:id/quantity', ProductController.getProductQuantity);
router.patch('/products/:id/discount', ProductController.applyDiscount);

export default router;