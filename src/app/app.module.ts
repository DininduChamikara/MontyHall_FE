import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IterationCountComponent } from './components/iteration-count/iteration-count.component';
import { DoorComponent } from './components/door/door.component';
import { IterationDetailsComponent } from './components/iteration-details/iteration-details.component';
import { SimulationInputComponent } from './components/simulation-input/simulation-input.component';
import { SimulationOutputComponent } from './components/simulation-output/simulation-output.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IterationCountComponent,
    DoorComponent,
    IterationDetailsComponent,
    SimulationInputComponent,
    SimulationOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
