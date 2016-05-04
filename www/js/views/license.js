define('views/license',
    [
        'base/base-view',
        'templates/license.html'
    ],
    function(BaseView, Template){
    'use strict';
    
    var view = BaseView.extend({

    	className: 'license-view',
    
        Template: Template
        
    });
    
    return view;
    
});