import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'swiper',
    loadChildren: () => import('./swiper/swiper.module').then( m => m.SwiperPageModule)
  },
  {
    path: 'show-less',
    loadChildren: () => import('./show-less/show-less.module').then( m => m.ShowLessPageModule)
  },
  {
    path: 'radio-value',
    loadChildren: () => import('./radio-value/radio-value.module').then( m => m.RadioValuePageModule)
  },
  {
    path: 'ion-loader',
    loadChildren: () => import('./ion-loader/ion-loader.module').then( m => m.IonLoaderPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
