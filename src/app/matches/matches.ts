import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-matches',
  standalone: false,
  template: `
    <h2>Matches</h2>
    <input [(ngModel)]="userId" placeholder="Enter user-id" />
    <button (click)="fetch()">Get Matches</button>
    <ul>
      <li *ngFor="let m of matches">{{ m.name }} - {{ m.email }}</li>
    </ul>
  `
})
export class Matches {
  userId = '';
  matches: any[] = [];

  constructor(private userService: UserService) {}

  fetch() {
    if (!this.userId) {
      alert("Please enter a User ID!");
      return;
    }
    this.userService.getMatches(this.userId).subscribe(data => {
      this.matches = data;
    });
  }
}
