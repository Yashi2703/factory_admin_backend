const router = require("express").Router();
const filterType = require("../controllers/filterTypeModel");
//add filter
router.post("/add-filter", filterType.addFilterType);
router.patch("/edit-filter/:id", filterType.editFilterType);
router.get("/filter-byid/:id", filterType.viewFilterType);
router.get("/filter", filterType.getAllFilterType);
router.delete("/delete-filter/:id", filterType.deletFilterType);
router.get("/search", filterType.search);
//end-filter
module.exports = router;
