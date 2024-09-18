import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  constructor(private route: Router) {

  }

  onClick() {
    this.route.navigate(['event/single-event']);
  }

}
