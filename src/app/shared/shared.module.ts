import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetquoteComponent } from './getquote/getquote.component';



@NgModule({
  declarations: [GetquoteComponent],
  imports: [
    CommonModule
  ],
  exports:[
    GetquoteComponent
  ]
})
export class SharedModule { }
