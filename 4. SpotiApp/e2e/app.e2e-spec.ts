import { SpotiAppPage } from './app.po';

describe('spoti-app App', () => {
  let page: SpotiAppPage;

  beforeEach(() => {
    page = new SpotiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
