const express = require('express')
const router = express.Router()
const cors = require('cors')
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logout,
  workEthic,
  curiosity,
  attention,
  empathy,
  user,
  getalluser,
  loginA,
  reset_curiosity,
  reset_empathy,
  reset_attention,
  reset_WorkEthic,
} = require('../controller/authController')

router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.get('/logout', logout)
router.patch('/workEthic/:id', workEthic)
router.patch('/reset_workEthic/:id', reset_WorkEthic)
router.patch('/curiosity/:id', curiosity)
router.patch('/reset_curiosity/:id', reset_curiosity)
router.patch('/attention/:id', attention)
router.patch('/reset_attention/:id', reset_attention)
router.patch('/empathy/:id', empathy)
router.patch('/reset_empathy/:id', reset_empathy)
router.get('/user/:id', user)
router.get('/getalluser', getalluser)
router.post('/loginA', loginA)

module.exports = router
