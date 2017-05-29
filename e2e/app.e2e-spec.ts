import { EastCoastPage } from './app.po';

describe('east-coast App', () => {
  let page: EastCoastPage;

  beforeEach(() => {
    page = new EastCoastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
