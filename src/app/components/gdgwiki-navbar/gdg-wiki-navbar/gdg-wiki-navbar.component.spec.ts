import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgWikiNavbarComponent } from './gdg-wiki-navbar.component';

describe('GdgWikiNavbarComponent', () => {
  let component: GdgWikiNavbarComponent;
  let fixture: ComponentFixture<GdgWikiNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdgWikiNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdgWikiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
