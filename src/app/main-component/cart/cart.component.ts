import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

interface Item {
  item: string;
  cost: number;
  details: {};
};

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatInputModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent {
  displayedColumns: string[] = ['item', 'price', 'quantity', 'subtotal'];
  
  // Example Data
  data = [{
    eventName: "Sacred Being",
    price: 100,
    localTime: "October 26, 2024 9:00 am - October 26, 2024 5:00 pm",
    clientTime: "(UTC+05:30) October 26, 2024 10:30 am - October 26, 2024 6:30 pm",
    TotalNumberOfPerson: 1
  }];

  couponCode: string = '';
  discountAmount: number = 0;
  discountMessage: string | null = null;

  applyCoupon() {
    if (this.couponCode === 'DISCOUNT10') {
      this.discountAmount = this.calculateSubtotal() * 0.1; // 10% discount
      this.discountMessage = 'Coupon applied! You got 10% off.';
    } else {
      this.discountMessage = 'Invalid coupon code!';
    }
  }

  calculateSubtotal() {
    return this.data.reduce((acc, item) => acc + (item.price * item.TotalNumberOfPerson), 0);
  }

  calculateTotal() {
    return this.calculateSubtotal() - this.discountAmount;
  }
}

