const express = require("express");
const {search} = require("../controllers/searchController");
const router = express.Router();

router.route('/').post(search);

module.exports=router;