import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, CarouselModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  eventDetails: any;
  constructor(private api: UserServiceService) { }
  
  ngOnInit(): void {
    // this.getEventDetails();
  }

  // getEventDetails() {
  //   this.api.getEventDetails(null).subscribe((res: any) => {
  //     if(res.status === 1 && res.message === "SUCCESS") {
  //       this.eventDetails = res.data;
  //       for(let event of this.eventDetails) {
  //         const time = event.eventDate;
  //         const date = new Date(time);
  //         const year = date.getFullYear();
  //         const month = (date.getMonth()+1).toString().padStart(2, '0');
  //         const day = date.getDate().toString().padStart(2, '0');
  //         const fullDate = `${year}-${month}-${day}`;
  //         console.log(fullDate);
  //         event.eventDate = fullDate;
  //       }    
  //       console.log(this.eventDetails);    
  //     }
  //   });
  // }
}
