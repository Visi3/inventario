"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const router = (0, express_1.Router)();
router.post('/orders', orderController_1.createOrder);
router.get('/orders', orderController_1.getAllOrders);
router.get('/orders/:orderId/items', orderController_1.listOrderItems);
router.put('/orders/:id', orderController_1.updateOrder);
router.delete('/orders/:id', orderController_1.deleteOrder);
router.post('/orders/:orderId/items', orderController_1.addOrderItem);
router.delete('/orders/:id/items/:orderItemId', orderController_1.removeOrderItem);
exports.default = router;