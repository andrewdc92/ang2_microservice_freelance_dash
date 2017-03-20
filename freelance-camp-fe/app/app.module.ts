import { NgModule } from '@angular/core';
//ng module is class decorator- a way of wrapping metadata around classes. takes a
//metadata object that tells Angular how to compile and launch the application
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';


import { AppRoutingModule } from './app-routing-module';

//angular is far from rails- won't load every component automatically, remember
// module pattern in JS (similiar to React, MEN stack)

//import array below is different than importing js modules, only import Ngmodule in app.module
@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HomepageComponent,
		DocumentsComponent
	],
	bootstrap: [
		AppComponent
	]
})

//bootstrap is related to startup, not css framework :)
export class AppModule {}

// this file is absolutely necessary, no logic, just helps manage the components
