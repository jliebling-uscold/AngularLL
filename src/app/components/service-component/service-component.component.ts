import { Component } from '@angular/core';
import { LunchLearnService } from '../../services/lunch-learn.service';

@Component({
  selector: 'app-service-component',
  imports: [],
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.scss',
})
export class ServiceComponentComponent {
  public lunchData: any[] = [];

  public code: string = `
    @Injectable({
      providedIn: 'root',
    })
    export class LunchLearnService {}
    `;

  constructor(private lunchlearnservice: LunchLearnService) {}

  getAHelloFromExpress(): void {
    this.lunchlearnservice
      .getAHelloFromExpress()
      .subscribe((res) => alert(res));
  }
  getLunchDataFromExpress(): void {
    this.lunchlearnservice
      .getLunchAndLearnData()
      .subscribe((res) => (this.lunchData = [...res]));
  }
  //use express hello and get a hello with a random number, have the screen show the random number
  //explain rxjs, synchrnous and asyncrhonous
}
