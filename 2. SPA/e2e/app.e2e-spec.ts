import { SPAPage } from './app.po';

describe('spa App', () => {
  let page: SPAPage;

  beforeEach(() => {
    page = new SPAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
