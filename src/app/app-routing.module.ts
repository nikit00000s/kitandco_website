import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () => import('src/app/modules/pages/about-us/about-us.module').then(
        mod => mod.AboutUsModule
    )
  },
  {
    path: 'articles',
    loadChildren: () => import('src/app/modules/pages/articles/articles.module').then(
        mod => mod.ArticlesModule
    )
  },
  {
    path: 'games',
    loadChildren: () => import('src/app/modules/pages/games/games.module').then(
        mod => mod.GamesModule
    )
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/modules/pages/home/home.module').then(
        mod => mod.HomeModule
    )
  },
  {
    path: 'tales',
    loadChildren: () => import('src/app/modules/pages/tales/tales.module').then(
        mod => mod.TalesModule
    )
  },
  {
    path: 'video',
    loadChildren: () => import('src/app/modules/pages/video/video.module').then(
        mod => mod.VideoModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
