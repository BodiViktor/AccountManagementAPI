import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountListModule } from './account-list/account-list.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { OptionsModule } from '../options/options.module';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule, FormsModule, OptionsModule, CreateAccountModule, AccountListModule
  ],
  exports: [
    AccountComponent,
  ]
})
export class AccountModule { }