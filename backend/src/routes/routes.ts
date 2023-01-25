import { Router } from 'express';
const userRoutes = require('./user.routes');

const router: Router = Router();

router.use('/user', userRoutes);

module.exports = router;
