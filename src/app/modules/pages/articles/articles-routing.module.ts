import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./articles.component";
import {allArticles} from "../../../helpers/all-articles";
import {SelectedArticleComponent} from "./selected-article/selected-article.component";

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: ':name',
    component: SelectedArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
