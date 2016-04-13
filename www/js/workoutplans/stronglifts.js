define('workoutplans/stronglifts', [], function(){
    return {
        "name": "Stronglifts 5x5",
        "sessions": [
            {
                "order": 0,
                "id": "72c538fa-55ae-4879-9715-d253c361b2cb",
                "name": "Day 1",
                "description": "",
                "estTime": 45,
                "enabled": true,
                "exercises": [
                    {
                        "order": 0,
                        "id": "8aa951db-9d92-4318-a19f-f3e9bf87113f",
                        "name": "Squat 5x5",
                        "muscle": "All",
                        "pause": 45,
                        "enabled": true,
                        "sets": "5"
                    },
                    {
                        "order": 1,
                        "id": "18795e37-6d04-4914-a9d8-3b695a312089",
                        "name": "Bench Press 5x5",
                        "muscle": "All",
                        "pause": 45,
                        "enabled": true,
                        "sets": "5"
                    },
                    {
                        "order": 2,
                        "id": "b2031c45-3bb9-451d-9910-eb9afad84889",
                        "name": "Barbell Row",
                        "muscle": "All",
                        "pause": 45,
                        "enabled": true,
                        "sets": "5"
                    }
                ]
            },
            {
                "order": 1,
                "name": "Day 2",
                "description": "",
                "estTime": 45,
                "enabled": true,
                "id": "913d4631-3a26-4c8f-aa33-f7efdb32d91d",
                "exercises": [
                    {
                        "order": 0,
                        "id": "a9abc09f-59fe-4d30-843d-d53491dd822b",
                        "name": "Squat",
                        "muscle": "All",
                        "sets": 5,
                        "pause": 45,
                        "enabled": true
                    },
                    {
                        "order": 1,
                        "id": "a1fcdea7-3157-41be-b600-a38739212149",
                        "name": "Overhead press",
                        "muscle": "All",
                        "sets": 5,
                        "pause": 45,
                        "enabled": true
                    },
                    {
                        "order": 2,
                        "id": "a428182e-83c2-4c8c-b8b3-54179bfa90fd",
                        "name": "Deadlift",
                        "muscle": "All",
                        "sets": 5,
                        "pause": 45,
                        "enabled": true
                    }
                ]
            }
        ]
    };
})