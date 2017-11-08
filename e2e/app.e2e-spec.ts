import { EnglishForKidsPage } from './app.po';

describe('english-for-kids App', () => {
  let page: EnglishForKidsPage;

  beforeEach(() => {
    page = new EnglishForKidsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
