import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { HomeComponent } from './main-component/home/home.component';
import { PageNotFoundComponent } from './shared-component/page-not-found/page-not-found.component';
import { AboutComponent } from './main-component/about/about.component';
import { EventComponent } from './main-component/event/event.component';
import { ResourcesComponent } from './main-component/resources/resources.component';
import { ContactComponent } from './main-component/contact/contact.component';
import { PrivateComponent } from './main-component/private/private.component';
import { CorporateComponent } from './main-component/corporate/corporate.component';
import { PortfolioComponent } from './main-component/portfolio/portfolio.component';
import { CartComponent } from './main-component/cart/cart.component';
import { CheckoutComponent } from './main-component/checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'event', component: EventComponent },
    { path: 'resourecs', component: ResourcesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'private', component: PrivateComponent },
    { path: 'corporate', component: CorporateComponent },
    { path: 'gallery', component: PortfolioComponent},
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders = [
    provideRouter(routes, withHashLocation())
];
