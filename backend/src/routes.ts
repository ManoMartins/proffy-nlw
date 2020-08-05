import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({message: "Oi"})
});

export default routes;