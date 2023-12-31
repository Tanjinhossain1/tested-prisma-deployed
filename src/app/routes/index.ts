import express from 'express';
import { UserRouter } from '../module/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/user",
    routes: UserRouter
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
