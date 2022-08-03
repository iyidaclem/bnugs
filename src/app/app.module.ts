import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { Landing1Component } from './landing1/landing1.component';
import { Landing2Component } from './landing2/landing2.component';
import { Landing3Component } from './landing3/landing3.component';
import { Landing4Component } from './landing4/landing4.component';
import { MintComponent } from './mint/mint.component';
import { Mint2Component } from './mint2/mint2.component';
import { AboutComponent } from './about/about.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    BlogDetailsComponent,
    ComingSoonComponent,
    HomeComponent,
    Landing1Component,
    Landing2Component,
    Landing3Component,
    Landing4Component,
    MintComponent,
    Mint2Component,
    AboutComponent,
    RoadmapComponent,
    TeamComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScannerQrcodeModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
   
  ],
  exports:[],
 
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
