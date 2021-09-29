import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListingComponent } from './listing/listing.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddEditComponent,
    ListingComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
