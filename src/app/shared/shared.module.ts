import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ButtonComponent } from './components/button/button.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
  ], 
  exports: [
    MaterialModule,
    ButtonComponent
  ]
})
export class SharedModule { }
