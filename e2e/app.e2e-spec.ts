import { AppRokk3rlabsPage } from './app.po';

describe('app-rokk3rlabs App', function() {
  let page: AppRokk3rlabsPage;

  beforeEach(() => {
    page = new AppRokk3rlabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
