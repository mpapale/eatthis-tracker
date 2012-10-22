require.config({
    paths: {
        underscore: 'libs/underscore',
        backbone: 'libs/backbone'
    }
});

// entry point for app 
require(['libs/bootstrap','app'], function(BS, App) {
    App.initialize();
});
