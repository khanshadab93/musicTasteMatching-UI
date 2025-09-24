import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  template: `
    <h2>Register</h2>
    <input [(ngModel)]="username" placeholder="username" />
    <input [(ngModel)]="email" placeholder="email" />
    <input [(ngModel)]="password" placeholder="password" />
    <button (click)="register()">Register</button>
  `
})
export class Register {
  username = '';
  email = '';
  password = '';

  constructor(private userService: UserService) {}

  register() {
    const user = { username: this.username, email: this.email, password: this.password };
    this.userService.register(user).subscribe(res => {
      alert(res);
      localStorage.setItem('userId', '1'); // replace with backend response
    });
  }
}
