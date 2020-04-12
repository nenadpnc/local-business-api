import * as Express from 'express';
import axios from 'axios';
import PlacesService from '../services/PlacesService';
import ErrorService from '../services/ErrorService';
import { PlaceInfoResponse } from '../interfaces/IPlacesInfo';

const PLACES_URL = 'https://storage.googleapis.com/coding-session-rest-api';

export default class PlacesController {
  public static getPlaces(req: Express.Request, res: Express.Response): void {
    const places = [
      {
        id: 'GXvPAor1ifNfpF0U5PTG0w',
        name: 'Casa Ferlin'
      },
      {
        id: 'ohGSnJtMIC5nPfYRi_HTAg',
        name: 'Le Café du Marché'
      }
    ];
    res.send(places);
  }

  public static async getPlaceInfo(req: Express.Request, res: Express.Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        throw new Error('Place id must be provided');
      }

      const response: PlaceInfoResponse = (await axios.get(`${PLACES_URL}/${id}`)).data;
      const data = PlacesService.transformPlaceResponse(response);
      res.send(data);
    } catch (err) {
      ErrorService.handle('Error fetching place info', err, res);
    }
  }
}
