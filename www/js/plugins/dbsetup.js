define('plugins/dbsetup', [], function(){

    return {
            id: "styrkur",
            description: "Styrkur database",
            nolog: true,
            migrations : [
                {
                    version: "1.0",
                    before: function(next) {
                        // Do magic stuff before the migration. For example, before adding indices, the Chrome implementation requires to set define a value for each of the objects.
                        next();
                    },
                    migrate: function(transaction, next) {
                        var appinfo = transaction.db.createObjectStore("appinfo");
                        var bodypart = transaction.db.createObjectStore("bodypart");
                        var measurement = transaction.db.createObjectStore("measurement");
                        var movement = transaction.db.createObjectStore("movement");
                            movement.createIndex("muscleIndex", "muscle");
                        var muscle = transaction.db.createObjectStore("muscle");
                        var sessionInstance = transaction.db.createObjectStore("session-instance"); 
                            sessionInstance.createIndex("parentIndex", "parent");
                            sessionInstance.createIndex("dateIndex", "date");
                        var user = transaction.db.createObjectStore("user");
                        var workout = transaction.db.createObjectStore("workout");
        
                        next();
                    }
                }
            ]
        };


});