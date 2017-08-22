import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AddCityComponent } from './components/add-city.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
