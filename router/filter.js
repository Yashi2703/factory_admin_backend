const router = require("express").Router();
const filter = require("../controllers/filter");
//add filter
router.post("/add-filter", filter.addFilter);
router.patch("/edit-filter/:id", filter.editFilter);
router.get("/filter-byid/:id", filter.viewFilter);
router.get("/filter", filter.getAllFilter);
router.delete("/delete-filter/:id", filter.deletFilter);
router.get("/search", filter.search);
//end-filter
module.exports = router;
