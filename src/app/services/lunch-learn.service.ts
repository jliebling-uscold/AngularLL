import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LunchLearnAsyncService } from './lunch-learn.async.service';

@Injectable({
  providedIn: 'root',
})
export class LunchLearnService {
  constructor(private lunchLearnAsyncService: LunchLearnAsyncService) {}

  public getAHelloFromExpress(): Observable<any> {
    return this.lunchLearnAsyncService.getAHelloFromExpress();
  }

  public getLunchAndLearnData(): Observable<any> {
    return this.lunchLearnAsyncService.getLunchAndLearnData();
  }
}
