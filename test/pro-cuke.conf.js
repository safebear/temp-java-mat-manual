exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'http://localhost:8080/',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
      }],
  
      specs: [
          'product.features/*.feature'
        ],
      
        cucumberOpts: {
          require: 'product.features/steps/*.steps.js',
          tags: false,
          format: 'json:.tmp/results.json',
          profile: false,
          'no-source': true
        }
};