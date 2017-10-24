import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { DtApiService } from './dtapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  public title = 'Mobile DT virtual sensors';
  private dtApiService: DtApiService;
  private thingId = 'b70eih4npbt0009umso0';

  constructor(http: Http) {
    this.dtApiService = new DtApiService(http);
  }

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }

  tooMuchNoise(): void {
    this.dtApiService.updateVirtualSensor_proximity_setObjectPresent(this.thingId, true)
      .subscribe(
        (res: any) => {
          console.log('VirtualSensor with thingId ' + this.thingId + ' set to object_present = true, result: ' + res);
        },
        (error: any) => {
          console.error(' Error: ' + error);
          throw Error('Unable to set virtual dtThing with id ' + this.thingId + ' reason:' + error);
        },
        () => {
          console.log('http request ended, hopefully with success');
        }
      );
  }

}
