import { Component } from '@angular/core';
import { CreateObservableService } from './create-observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearningRxJS';

  constructor(observableService: CreateObservableService) {
    observableService.createObservableSeparate();
    observableService.createObservableArrow();
  }
}
