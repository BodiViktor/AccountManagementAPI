import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OptionsComponent } from './options.component';


@NgModule({
  declarations: [OptionsComponent],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [
    OptionsComponent
  ]
})
export class OptionsModule { }
