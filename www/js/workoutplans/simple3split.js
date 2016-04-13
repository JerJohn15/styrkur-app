define('workoutplans/simple3split', [], function(){
    return {
        "name": "Simple 3 split",
        "sessions": [
            {
                "order": 0,
                "name": "Back & Bicep",
                "description": "Back & Bicep day!! !!",
                "estTime": 45,
                "exercises": [
                    {
                        "order": 0,
                        "id": "e25dfe2f-492b-0c91-a349-b930881cd4b7",
                        "name": "Pulldown",
                        "muscle": "Lats",
                        "muscleid": "4f54b3b9-c151-4c37-908c-4595d935e5fa",
                        "sets": "3"
                    },
                    {
                        "order": 1,
                        "id": "1fb3d779-a68e-63bf-5997-321ffd4ae50a",
                        "name": "Barbell Rows",
                        "muscle": "Back thickness",
                        "muscleid": "1be353f4-d284-4b4f-ffb1-a3d07d4a3edd",
                        "sets": "3"
                    },
                    {
                        "order": 2,
                        "id": "2d6e8d78-80fc-ee07-9da4-35394f6c2853",
                        "name": "Barbell curls",
                        "muscle": "Bicep",
                        "muscleid": "57eeecac-d218-49ba-3ba3-176cd235d737",
                        "sets": "3"
                    }
                ],
                "id": "c917b9fc-1abb-b4ce-8aea-5318d54d9c5e"
            },
            {
                "order": 1,
                "name": "Chest & Tricep",
                "description": "Chest day!!",
                "sets": 0,
                "estTime": 45,
                "exercises": [
                    {   "id": "5b2c82b6-0ba1-b68a-9a4f-ba9c27388667",
                        "order": 0,
                        "name": "Incline dumbbell press",
                        "muscle": "Chest",
                        "muscleid": "7ad26a35-4290-4c28-cbb5-17188ea00f1a",
                        "sets": 3
                    },
                    {
                        "order": 1,
                        "id": "1ad18161-1b05-949c-e51e-8025618cfb56",
                        "name": "Cable crossover",
                        "muscle": "Chest",
                        "muscleid": "7ad26a35-4290-4c28-cbb5-17188ea00f1a",
                        "sets": 3
                    },
                    {
                        "order": 2,
                        "id": "9db0681f-8da8-c42c-baa2-02dde2564ea2",
                        "name": "Triceps Pushdown",
                        "muscle": "Tricep",
                        "muscleid": "8024fb28-fe70-4de9-4791-39382c105e9e",
                        "sets": "3"
                    }
                ],
                "id": "7e550395-9c28-11b6-f071-e0a0298a128f"
            },
            {
                "order": 2,
                "id": "68c6c7a9-d167-1955-373d-751a87f3d649",
                "name": "Legs",
                "estTime": "45",
                "description": "Eehh, optional brah!",
                "exercises": [
                    {
                        "order": 0,
                        "id": "35f8b26d-1dfa-0d58-13a2-3e69edf3bbcc",
                        "name": "Squat",
                        "muscle": "Hamstrings",
                        "muscleid": "ac38b26d-1dfa-0d58-13a2-3e69edf3b3aa",
                        "sets": "3"
                    },
                    {
                        "order": 1,
                        "id": "84d4c904-99b6-abba-7c33-b9253682faba",
                        "name": "Deadlift",
                        "muscle": "Hamstrings",
                        "muscleid": "ac38b26d-1dfa-0d58-13a2-3e69edf3b3aa",
                        "sets": "3"
                    },
                    {
                        "order": 2,
                        "id": "8c73d0a5-863d-f38a-0abc-439b1659f232",
                        "name": "Legg press",
                        "muscle": "Calfs",
                        "muscleid": "4d3e252b-cfba-4c84-01ab-2825970c3a33",
                        "sets": "3"
                    }
                ]
            }
        ]
    };
})