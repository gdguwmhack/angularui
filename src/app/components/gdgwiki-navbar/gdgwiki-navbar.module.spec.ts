import { GDGWikiNavbarModule } from './gdgwiki-navbar.module';

describe('GDGWikiNavbarModule', () => {
  let gDGWikiNavbarModule: GDGWikiNavbarModule;

  beforeEach(() => {
    gDGWikiNavbarModule = new GDGWikiNavbarModule();
  });

  it('should create an instance', () => {
    expect(gDGWikiNavbarModule).toBeTruthy();
  });
});
