import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
const routes: Routes = [
   
    {
        path: 'profile',
        component: ProfileComponent
      
    },
    {
        path: 'parent',
        component: ParentComponent
    },
    {
        path: 'child',
        component: ChildComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
