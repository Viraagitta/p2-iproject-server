let express = require("express");
let router = express.Router();
const userController = require("../controllers/userController");
let productsRoutes = require("./products.js");
const { authentication } = require("../middlewares/authentication.js");
const errorHandler = require("../middlewares/errorHandler");

router.get("/", userController.getHome);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/googleSignIn", userController.googleSignIn);
router.post("/userBoard", userController.tokenLeaderboard);

router.use(authentication);
router.use(productsRoutes);

module.exports = router;
