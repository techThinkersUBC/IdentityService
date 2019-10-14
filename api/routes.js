import expressRouter from 'express';
import * as AuthController from './controllers/authController';

const api = expressRouter.Router();

api.post('/auth/getToken', AuthController.getToken);
api.post('/auth/validateToken', AuthController.validateToken);

export default api;
