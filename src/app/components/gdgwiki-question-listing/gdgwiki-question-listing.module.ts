import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GdgWikiQuestionListingComponent } from './gdg-wiki-question-listing/gdg-wiki-question-listing.component';
import { MatTableModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule
  ],
  declarations: [GdgWikiQuestionListingComponent],
  exports: [GdgWikiQuestionListingComponent]
})
export class GDGWikiQuestionListingModule { }
