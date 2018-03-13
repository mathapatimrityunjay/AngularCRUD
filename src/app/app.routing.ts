import {Routes,RouterModule} from '@angular/router'
import{LoginComponent} from './login/login.component'
import{LandingComponent} from './landing/landing.component'
import {AboutusComponent} from './aboutus/aboutus.component'
import{ContactusComponent} from './contactus/contactus.component'
import{FeedbackComponent} from './feedback/feedback.component'
import { ModuleWithProviders } from '@angular/core';
import{DashboardComponent} from './dashboard/dashboard.component'
const routes:Routes=[{path:'',
                      component:LoginComponent
                        },
                        {
                            path:'landing',
                            component:LandingComponent,
                            children:[
                                      {
                                             path:'',
                                                component:DashboardComponent,
                                                
                                      },
                                      {
                                             path:'about',
                                                component:AboutusComponent,
                                                
                                      },
                                      {
                                         path:'contact',
                                       component:ContactusComponent,
                                      
                                    },
                                     {
                                        path:'feedback',
                                           component:FeedbackComponent,
                                           
                                     },
                                     {path:'home',redirectTo:''}]
                        }
                        
                     ]
export const routing:ModuleWithProviders=RouterModule.forRoot(routes)