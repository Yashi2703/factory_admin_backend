const router = require("express").Router();
const afterLogin = require("../controllers/index")

router.post("/create-client",afterLogin.addClient);
router.get("/get-client",afterLogin.getClient)
router.get("/view-client",afterLogin.viewClient)
router.put("/edit-client",afterLogin.editClient)
module.exports = router;