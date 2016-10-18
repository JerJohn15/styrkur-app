define('plugins/bb-i18next', ['i18next'], 
        function(i18next){

        return function(lang, cb){
            require(['translations/' + lang], function(langOpt){

                var config = {
                    lng: langOpt.lang,
                    resources: {}
                };
                config.resources[langOpt.lang] = {
                    translation: langOpt.translation
                };

                i18next.init(config, function(err, t){
                    cb(t);
                });
            });
        }
        
});