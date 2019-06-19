import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import {DataTableModule} from './data-table/data-table.module';

import 'highlight.js/styles/github.css';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

export function highlightJsFactory() {
  return hljs;
}

@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule,
    DataTableModule.forRoot(),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
