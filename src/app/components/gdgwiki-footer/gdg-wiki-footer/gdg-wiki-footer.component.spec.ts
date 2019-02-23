import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgWikiFooterComponent } from './gdg-wiki-footer.component';

describe('GdgWikiFooterComponent', () => {
  let component: GdgWikiFooterComponent;
  let fixture: ComponentFixture<GdgWikiFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdgWikiFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdgWikiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
