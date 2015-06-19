'use strict';

describe('BrewControl.version module', function() {
  beforeEach(module('BrewControl.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
