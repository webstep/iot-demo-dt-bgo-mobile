import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { API_KEY } from './apikey';

@Injectable()
export class DtApiService {
  private apiKey: string = API_KEY;
  private baseUrl = 'https://virtual-sensor.disruptive-technologies.com/v1/';
  private virtualSensorsUrl = this.baseUrl +  'virtual-sensors/';

  private getHeaders(key: string) {
    const headers = new Headers();
    headers.append('authorization', 'ApiKey ' + key);
    headers.append('accept', 'text/json');
    headers.append('cache-control', 'no-cache');
    return headers;
  }

  constructor(private http: Http) {}

  public updateVirtualSensor_proximity_setObjectPresent(thingId: string, objectPresent: boolean): any {
    const url = this.virtualSensorsUrl + thingId + '/set-object-present';
    const postParams = JSON.stringify( {
      'thing_id': thingId,
      'objectPresent': objectPresent
    });
    return this.http.post(url, postParams, { headers: this.getHeaders(this.apiKey) })
      .map(res => res.json());
  }
}
