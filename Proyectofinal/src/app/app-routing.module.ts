import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';


const redireccionarLogin = () => redirectUnauthorizedTo(['/registrar']);

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'role-selection',
    pathMatch: 'full',
  },
  {
    path: 'role-selection',
    loadChildren: () => import('./page/role-selection/role-selection.module').then(m => m.RoleSelectionPageModule)
  },

  {
    path: 'home',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redireccionarLogin },
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'login', 
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login-chofer',
    loadChildren: () => import('./page/login-chofer/login-chofer.module').then( m => m.LoginChoferPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./page/registrar/registrar.module').then(m => m.RegistrarPageModule)
  },
  {
    path: 'menu-chofer',
    loadChildren: () => import('./page/menu-chofer/menu-chofer.module').then( m => m.MenuChoferPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./page/recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'ride-list',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redireccionarLogin },
    loadChildren: () => import('./page/ride-list/ride-list.module').then(m => m.RideListPageModule)
  },
  {
    path: 'create-ride',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redireccionarLogin },
    loadChildren: () => import('./page/create-ride/create-ride.module').then(m => m.CreateRidePageModule)
  },
  {
    path: 'reset-password',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redireccionarLogin },
    loadChildren: () => import('./page/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'profile',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redireccionarLogin },
    loadChildren: () => import('./page/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'registrar-chofer',
    loadChildren: () => import('./page/registrar-chofer/registrar-chofer.module').then( m => m.RegistrarChoferPageModule)
  },
  {
    path: 'registrar-conductor',
    loadChildren: () => import('./page/registrar-conductor/registrar-conductor.module').then( m => m.RegistrarConductorPageModule)
  },   
  {
    path: 'felicitacion',
    loadChildren: () => import('./page/felicitacion/felicitacion.module').then( m => m.FelicitacionPageModule)
  },
  { 
    path: '**', 
    loadChildren: () => import('./page/error404/error404.module').then(m => m.Error404PageModule) 
  },
  {
    path: 'error404',
    loadChildren: () => import('./page/error404/error404.module').then( m => m.Error404PageModule)
  },
  

  
  
  

  


  

  
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }