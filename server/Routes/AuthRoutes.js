const express = require("express")
const router = express.Router()
const cors = require("cors")
const {test,register,login,getProfile} = require("../Controllers/AuthControllers")

//middleware
router.use(
    cors({
        credentials:true,
        origin:"http://localhost:3000"
    })
)

router.get('/',test)
router.post('/registerPage',register)
router.post('/loginPage',login)
router.get('/profile', getProfile)

module.exports = router