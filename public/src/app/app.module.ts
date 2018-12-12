import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { ManchesterComponent } from './manchester/manchester.component';
import { LeicesterComponent } from './leicester/leicester.component';
import { WolvesComponent } from './wolves/wolves.component';
import { SeattleComponent } from './seattle/seattle.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

@NgModule({
    declarations: [
        AppComponent,
        SanjoseComponent,
        ManchesterComponent,
        LeicesterComponent,
        WolvesComponent,
        SeattleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})

export class AppModule { }
