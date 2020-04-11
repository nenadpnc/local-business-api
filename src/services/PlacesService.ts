import get from 'lodash.get';
import { PlaceInfoResponse, PlaceInfoTransformed, Day } from '../interfaces/IPlacesInfo';

// generate an array of weekday names in English starting from Monday...
const weekdays = [...Array(7)].map((_, i) => new Date(1, 0, i).toLocaleString('en', { weekday: 'long' }));

export default class PlacesService {
  public static transformPlaceResponse(data: PlaceInfoResponse): PlaceInfoTransformed {
    const transformedResponse: PlaceInfoTransformed = {
      openingHours: [],
      name: data.displayed_what || '',
      address: data.displayed_where || '',
      geo: get(data, 'addresses[0].where.geography.location', {})
    };
    let lastDayIndex = -1;
    weekdays.forEach((weekday: string) => {
      const currentDay: Day[] = get(data, ['opening_hours', 'days', weekday.toLowerCase()]);
      if (!currentDay) {
        transformedResponse.openingHours.push([[weekday], 'CLOSED']);
        lastDayIndex++;
        return;
      }

      const workingHours = this.stringifyWorkingHours(currentDay);

      if (lastDayIndex > -1) {
        const previousDay = transformedResponse.openingHours[lastDayIndex];
        const previousDayWorkingHours = previousDay[1];
        if (previousDayWorkingHours === workingHours) {
          if (previousDay[0].length > 1) {
            previousDay[0].pop();
          }
          previousDay[0].push(weekday);
          return;
        }
      }

      transformedResponse.openingHours.push([[weekday], workingHours]);
      lastDayIndex++;
    });

    return transformedResponse;
  }

  private static stringifyWorkingHours(days: Day[]): string {
    return days
      .reduce((prev: string[], curr: Day) => {
        if (curr.type === 'OPEN') {
          prev.push(`${curr.start} - ${curr.end}`);
        }
        return prev;
      }, [])
      .join(',');
  }
}
