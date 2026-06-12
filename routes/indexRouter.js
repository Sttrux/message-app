const {Router} = require("express");
const {getHome,getMessages, getNewMessage,getFormInfo } = require("../controllers/indexController");

const router = Router();

router.get("/", getHome);
router.get("/messages", getMessages);
router.get ("/new", getNewMessage);


router.post("/new",getFormInfo);


module.exports = router;