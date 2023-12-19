import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { BlueSkyComponent } from './all-articles/blue-sky/blue-sky.component';
import { YellowLeafsComponent } from './all-articles/yellow-leafs/yellow-leafs.component';
import { SelectedArticleComponent } from './selected-article/selected-article.component';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    ArticlesComponent,
    BlueSkyComponent,
    YellowLeafsComponent,
    SelectedArticleComponent
  ],
    imports: [
        CommonModule,
        ArticlesRoutingModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        NgOptimizedImage
    ]
})
export class ArticlesModule { }
