import { AllCoinsFEPage } from './app.po';

describe('all-coins-fe App', function() {
  let page: AllCoinsFEPage;

  beforeEach(() => {
    page = new AllCoinsFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
