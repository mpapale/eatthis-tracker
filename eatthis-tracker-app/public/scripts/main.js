require.config({
    paths: {
        underscore: 'libs/underscore',
        backbone: 'libs/backbone'
    }
});

// entry point for app 
require(['app'], function(App) {
    App.initialize();
});
