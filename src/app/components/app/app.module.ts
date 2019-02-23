import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { MatToolbarModule } from '@angular/material'
import { GDGWikiQuestionListingModule } from '../gdgwiki-question-listing/gdgwiki-question-listing.module'
import { QaPageComponent } from '../qa-page/qa-page/qa-page.component'
import { HomeComponentComponent } from '../home-component/home-component.component'
import { MatExpansionModule } from '@angular/material/expansion'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'question/:id', component: QaPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    QaPageComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    GDGWikiQuestionListingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
