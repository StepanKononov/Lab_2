import {Router} from 'express';
import PurchaseController from '../controllers/PurchaseController';

const router = Router();

router.post('/purchase', PurchaseController.purchaseProduct);
router.get('/purchase/history/:userId', PurchaseController.getPurchaseHistory);

export default router;