import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AccountListComponent } from './account-list.component';

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule
  ],
  exports: [
    AccountListComponent
  ]
})
export class AccountListModule { }