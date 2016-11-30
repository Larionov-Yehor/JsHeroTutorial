import { LaroSelfPage } from './app.po';

describe('laro-self App', function() {
  let page: LaroSelfPage;

  beforeEach(() => {
    page = new LaroSelfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
