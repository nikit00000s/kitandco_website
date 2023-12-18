import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationTemplateComponent } from './navigation-template.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterLink, RouterLinkActive, RouterLinkWithHref} from "@angular/router";



@NgModule({
    declarations: [
        NavigationTemplateComponent
    ],
    exports: [
        NavigationTemplateComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTooltipModule,
        RouterLink,
        RouterLinkWithHref,
        RouterLinkActive
    ]
})
export class NavigationTemplateModule { }
