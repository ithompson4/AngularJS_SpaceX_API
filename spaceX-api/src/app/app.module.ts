import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule, 
         MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule,
         MatProgressBarModule, MatProgressSpinnerModule } from  '@angular/material';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AboutComponent } from './about/about.component';
import { RocketComponent } from './rocket/rocket.component';
import { SpinnerComponent } from './spinner/spinner.component';

const appRoutes: Routes = [ 
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path:'',
    component: HistoryComponent,
  },
  {
    path:'rockets',
    component: RocketsComponent,
  },
  {
    path: 'itemRocket/:rocket_id',
    component: RocketComponent,
  },
  {
    path:'about',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HistoryComponent,
    RocketsComponent,
    AboutComponent,
    RocketComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule, 
    MatProgressBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }