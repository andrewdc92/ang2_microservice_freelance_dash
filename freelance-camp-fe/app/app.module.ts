import { NgModule } from '@angular/core';
//ng module is class decorator- a way of wrapping metadata around classes
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AppRoutingModule } from './app-routing-module';

//angular is far from rails- won't load every component automatically, remember
// module pattern in JS (similiar to React, MEN stack)

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HomepageComponent
	],
	bootstrap: [
		AppComponent
	]
})

//bootstrap is related to startup, not css framework :)
export class AppModule {}

// this file is absolutely necessary, no logic, just helps manage the components
