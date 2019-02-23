import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaPageComponent } from './qa-page/qa-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QaPageComponent],
  exports: [QaPageComponent]
})
export class QaPageModule { }
