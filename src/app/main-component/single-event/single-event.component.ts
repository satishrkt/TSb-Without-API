import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-event',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './single-event.component.html',
  styleUrl: './single-event.component.css'
})
export class SingleEventComponent {

  formData!: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {
    this.formData = this.fb.group({
      noOfPerson: this.fb.control(''),
      fName: this.fb.control(''),
      lName: this.fb.control(''),
      phone: this.fb.control('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
    })
  }

  onClick() {
    this.route.navigate(['/cart']);
  }

}
