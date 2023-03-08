const express = require("express")
const router = express.Router()

const {register,login,createOrder,OrderDetails} = require('../controllers/user.js')
// const { register,login } = require('../controllers/user.js')
// const { createOrder,OrderDetails } = require('../controllers/order.js')



// router.route('/add-user').post(register)
// router.route('/login-user').post(login)
// router.route("/add-order").post(createOrder)
// router.route("/:userId/get-order").get(OrderDetails)

// router.post("/register",register)
// router.post("/login-user",login)

router.route('/register').post(register)
router.route('/login').post(login)
router.route("/addOrder").post(createOrder)
router.route("/:userId/get-order").get(OrderDetails)

module.exports = router