import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, NativeDateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-checkout',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatButtonModule, MatTableModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  eventData: any;

  constructor(private fb: FormBuilder) {
    this.eventData = this.fb.group({
      fName: this.fb.control(null),
      lName: this.fb.control(''),
      city: this.fb.control(''),
      state: this.fb.control(''),
      country: this.fb.control(''),
      zipCode: fb.control(''),
      phone: this.fb.control(''),
      email: this.fb.control(''),
    });
  }
  ngOnInit(): void {
      
  }

  displayedColumns: string[] = ['item', 'subtotal'];

  data = [{
    eventName: "Sacred Being",
    price: 100,
    localTime: "October 26, 2024 9:00 am - October 26, 2024 5:00 pm",
    clientTime: "(UTC+05:30) October 26, 2024 10:30 am - October 26, 2024 6:30 pm",
    TotalNumberOfPerson: 1
  }];

  onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
  }

  

}
