import expressRouter from 'express';
import { validateToken } from "./auth.js";
import * as AuthController from './controllers/authController.js';
import * as EndpointsController from './controllers/endpointsController.js';
import * as PermissionsController from './controllers/permissionsController.js';
import * as SessionController from './controllers/sessionController.js';

const api = expressRouter.Router();

api.post('/auth/getToken', AuthController.getToken);
api.post('/auth/validateToken', AuthController.validateToken);

api.get('/endpoints/:appId', EndpointsController.getEndpoints);
api.get('/permissions/:appId', PermissionsController.getPermissions);

api.post('/sessions/token', SessionController.getSessionToken);

export default api;
