module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'www/bower_components/angular/angular.js',
      'www/bower_components/angular-route/angular-route.js',
      'www/bower_components/angular-mocks/angular-mocks.js',
      'www/bower_components/angular-resource/angular-resource.js',
      'www/components/**/*.js',
      'www/view*/**/*.js',
      'www/status/*.js',
      'www/config/*.js',
      'www/js/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
