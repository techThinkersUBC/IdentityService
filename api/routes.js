import expressRouter from 'express';
import { validateToken } from "./auth.js";
import * as AuthController from './controllers/authController.js';
import * as EndpointsController from './controllers/endpointsController.js';
import * as PermissionsController from './controllers/permissionsController.js';

const api = expressRouter.Router();

api.post('/auth/getToken', AuthController.getToken);
api.post('/auth/validateToken', AuthController.validateToken);

api.get('/endpoints/:appId', AuthController.validateToken, EndpointsController.getEndpoints);
api.get('/permissions/:appId', AuthController.validateToken, PermissionsController.getPermissions);

export default api;
