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
    path: 'ionic',
    loadChildren: () => import('./pages/ionic-main/ionic/ionic.module').then( m => m.IonicPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./pages/javascript-main/javascript/javascript.module').then( m => m.JavascriptPageModule)
  },
  {
    path: 'firebase',
    loadChildren: () => import('./pages/firebase-doc/firebase/firebase.module').then( m => m.FirebasePageModule)
  },
  {
    path: 'html',
    loadChildren: () => import('./pages/html-doc/html/html.module').then( m => m.HtmlPageModule)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./pages/bootstrap-doc/bootstrap/bootstrap.module').then( m => m.BootstrapPageModule)
  },
  {
    path: 'animation',
    loadChildren: () => import('./pages/animation-doc/animation/animation.module').then( m => m.AnimationPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog-doc/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./pages/angular-doc/angular/angular.module').then( m => m.AngularPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/angular-doc/camera/camera.module').then( m => m.CameraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
