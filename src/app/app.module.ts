import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {VisualizationComponent} from './visualization/visualization.component';
import {FormsModule} from '@angular/forms';
import {CountWordsService} from './services/count-words.service';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CountWordsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
