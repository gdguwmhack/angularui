import { GDGWikiFooterModule } from './gdgwiki-footer.module';

describe('GDGWikiFooterModule', () => {
  let gDGWikiFooterModule: GDGWikiFooterModule;

  beforeEach(() => {
    gDGWikiFooterModule = new GDGWikiFooterModule();
  });

  it('should create an instance', () => {
    expect(gDGWikiFooterModule).toBeTruthy();
  });
});
