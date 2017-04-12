import { NgTemplateOutletDemoPage } from './app.po';

describe('ng-template-outlet-demo App', () => {
  let page: NgTemplateOutletDemoPage;

  beforeEach(() => {
    page = new NgTemplateOutletDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
