import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-preferences',
  standalone: false,
  template: `
    <h2>Add Preferences</h2>
    <input [(ngModel)]="id" placeholder="Enter user-id" />
    <input [(ngModel)]="genre" placeholder="Genre" />
    <input [(ngModel)]="artist" placeholder="Artist" />
    <input type="number" [(ngModel)]="rating" placeholder="Rating (1-5)" />
    <button (click)="save()">Save</button>
  `
})
export class Preferences {
  id = '';
  genre = '';
  artist = '';
  rating: number | null = null;

  constructor(private userService: UserService) {}

  save() {
    if (!this.id) {
      alert("Please enter a valid user ID!");
      return;
    }
    if (!this.genre || !this.artist || this.rating == null) {
      alert("Please fill all fields!");
      return;
    }

    this.userService.addPreference(this.id, [
      {
        genre: this.genre,
        artist: this.artist,
        rating: this.rating
      }
    ]).subscribe({
      next: () => alert("Preference saved!"),
      error: (err) => {
        console.error(err);
        alert("Error saving preference!");
      }
    });
  }
}
