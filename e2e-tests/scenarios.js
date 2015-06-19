'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('BrewControlClient', function() {

  browser.get('index.html');

  it('should automatically redirect to /info when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/info");
  });


  describe('info', function() {

    beforeEach(function() {
      browser.get('index.html#/info');
    });


    it('should render info when user navigates to /info', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for info/);
    });

  });


  describe('config', function() {

    beforeEach(function() {
      browser.get('index.html#/config');
    });


    it('should render config when user navigates to /config', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for config/);
    });

  });
});
