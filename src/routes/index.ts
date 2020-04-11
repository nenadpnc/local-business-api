import { Router } from 'express';
import PlacesController from '../controlers/PlacesController';

export const apiRoutes = (): Router => {
  const router = Router();

  router.get('/api/place/:id', PlacesController.getPlaceInfo);

  return router;
};
