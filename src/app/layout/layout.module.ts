import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UiLibraryModule } from '../ui-library/ui-library.module';
import { ShowErrorsComponent } from '../show-errors/show-errors.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UiLibraryModule,

  ],
  declarations: [ProfileComponent, ShowErrorsComponent, ParentComponent, ChildComponent]
})
export class LayoutModule { }
