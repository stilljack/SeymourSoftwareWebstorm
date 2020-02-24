import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  title = 'Seymour Software';
  constructor() { }

  // guess you dont need explicit getter methods, but k
  public getTitle() {
    return this.title;
  }
}
