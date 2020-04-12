import { Router } from 'express';
import PlacesController from '../controlers/PlacesController';

export const apiRoutes = (): Router => {
  const router = Router();

  router.get('/api/places', PlacesController.getPlaces);

  router.get('/api/places/:id', PlacesController.getPlaceInfo);

  return router;
};
