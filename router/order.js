const router = require("express").Router();
const orderRouter = require("../controllers/orders");

router.post("/add-order", orderRouter.addOrders);
router.patch("/edit-order/:id", orderRouter.editOrder);
router.get("/order-byid/:id", orderRouter.viewOrder);
router.get("/order", orderRouter.getAllOrders);
router.get("/search", orderRouter.searchOrder);
router.delete("/delete-order/:id", orderRouter.deleteOrder);

module.exports = router;
