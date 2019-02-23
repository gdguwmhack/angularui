import { GDGWikiQuestionListingModule } from './gdgwiki-question-listing.module';

describe('GDGWikiQuestionListingModule', () => {
  let gDGWikiQuestionListingModule: GDGWikiQuestionListingModule;

  beforeEach(() => {
    gDGWikiQuestionListingModule = new GDGWikiQuestionListingModule();
  });

  it('should create an instance', () => {
    expect(gDGWikiQuestionListingModule).toBeTruthy();
  });
});
