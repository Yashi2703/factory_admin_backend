const router = require("express").Router();
const afterLogin = require("../controllers/index");
//add =client
router.post("/create-client", afterLogin.addClient);
router.get("/get-client", afterLogin.getClient);
router.get("/view-client", afterLogin.viewClient);
router.put("/edit-client", afterLogin.editClient);
//end-start

//add-order
router.post("/add-order", afterLogin.addOrder);
router.get("/get-order", afterLogin.getOrder);
router.get("/view-order", afterLogin.viewOrder);
router.put("/edit-order", afterLogin.editOrder);
//end-order
module.exports = router;
