import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for diamondsale-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be diamondsale-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('diamondsale-app');
    })
  });

  it('navbar-brand should be diamondsale-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('diamondsale-network@0.0.1');
  });

  
    it('Diamond component should be loadable',() => {
      page.navigateTo('/Diamond');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Diamond');
    });

    it('Diamond table should have 5 columns',() => {
      page.navigateTo('/Diamond');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('Order component should be loadable',() => {
      page.navigateTo('/Order');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Order');
    });

    it('Order table should have 7 columns',() => {
      page.navigateTo('/Order');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });

  

});
