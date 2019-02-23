import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgWikiQuestionListingComponent } from './gdg-wiki-question-listing.component';

describe('GdgWikiQuestionListingComponent', () => {
  let component: GdgWikiQuestionListingComponent;
  let fixture: ComponentFixture<GdgWikiQuestionListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdgWikiQuestionListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdgWikiQuestionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
