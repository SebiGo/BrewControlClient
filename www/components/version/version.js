'use strict';

angular.module('BrewControl.version', [
  'BrewControl.version.interpolate-filter',
  'BrewControl.version.version-directive'
])

.value('version', '0.1');
