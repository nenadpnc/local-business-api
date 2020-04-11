import PlacesService from '../src/services/PlacesService';
import testData from './openingHoursTestData.json';

describe('PlacesService', () => {
  test('should return correct places object', () => {
    testData.forEach((data: any) => {
      const response = PlacesService.transformPlaceResponse(data);
      expect(response.openingHours).toEqual(data.expected);
    });
  });
});
