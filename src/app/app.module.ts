import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Collected Spark Core Import
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { sparkCorePrerender } from "@sparkdesignsystem/spark-core/spark-core-prerender";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SparkCoreAngularModule,
    BrowserAnimationsModule,
    sparkCorePrerender
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
