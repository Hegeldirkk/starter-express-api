const AppController = require('../controllers/AppController');
const AuthController = require('../controllers/AuthController');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({"error": false, "message": "you are welcome!"});
});

// check status and stats of db
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// Authenticate user
router.post('/signup', AuthController.postSignup);
router.post('/login', AuthController.postLogin);

// Create post and read post
router.post('/posts/create', AppController.postCreate);
router.get('/posts', AppController.postRead);

module.exports = router;