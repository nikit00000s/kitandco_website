import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavigationTemplateModule} from "./modules/shared/navigation-template/navigation-template.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './modules/pages/about-us/about-us.component';
import {MatPaginatorIntlRu} from "./providers/mat-paginator-intl";
import {MatPaginatorIntl} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NavigationTemplateModule,
        NgbModule
    ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlRu}],
  bootstrap: [AppComponent]
})
export class AppModule { }
