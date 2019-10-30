import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allBooks } from './data';

@Injectable({
  providedIn: 'root'
})
export class CreateObservableService {

  constructor() { }


  // Create Observable with arrow function
  createObservableArrow() {
    const allBooksObservable$ = new Observable(subscriber => {
      if (document.title !== 'LearningRxJS') {
        subscriber.error('Incorrect page title.');
      }

      for (const book of allBooks) {
          subscriber.next(book);
      }

      setTimeout(() => {
        subscriber.complete();
      }, 2000);
      return () => console.log('Cleanup');
    });

    allBooksObservable$.subscribe((book: any) => console.log(book.title));
  }

  // Separate subscribe function
  createObservableSeparate() {
    function subscribe(subscriber) {
      for (const book of allBooks) {
        subscriber.next(book);
      }
    }
    const allBooksObservable$ = Observable.create(subscribe);

    allBooksObservable$.subscribe((book: any) => console.log(book.title));
  }
}
