
exports.config = {

    directConnect: true,
    capabilities: {
        browserName: 'firefox'
    },

    specs: [
        // Login Page
        'features/*.feature'
   ],


    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['features/step_definitions/*.js' ],
        format: 'pretty',
        format: 'json:results/output.json',
       // format: 'pretty',
        resultJsonOutputFile: 'true'

    }

};
