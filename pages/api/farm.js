
const farms = [
    {
        "id": 0,
        "name": "농장1",
        "crops": "감자",
        "annualProduction": [
            {
                "month": 1,
                "Production": 2000
            },
            {
                "month": 2,
                "Production": 1000
            },
            {
                "month": 3,
                "Production": 2500
            },
            {
                "month": 4,
                "Production": 3500
            },
            {
                "month": 5,
                "Production": 1200
            },
            {
                "month": 6,
                "Production": 5000
            },
            {
                "month": 7,
                "Production": 2300
            },
            {
                "month": 8,
                "Production": 2900
            },
            {
                "month": 9,
                "Production": 2500
            },
            {
                "month": 10,
                "Production": 3900
            },
            {
                "month": 11,
                "Production": 4400
            },
            {
                "month": 12,
                "Production": 6600
            }
        ]
    },
    {
        "id": 1,
        "name": "농장2",
        "crops": "토마토",
        "houses": [
            { "id": 0, "name": "하우스1", "active": true },
            { "id": 1, "name": "하우스2", "active": false }
        ],
        "annualProduction": [
            {
                "month": 1,
                "Production": 2000
            },
            {
                "month": 2,
                "Production": 1000
            },
            {
                "month": 3,
                "Production": 2500
            },
            {
                "month": 4,
                "Production": 3500
            },
            {
                "month": 5,
                "Production": 1200
            },
            {
                "month": 6,
                "Production": 5000
            },
            {
                "month": 7,
                "Production": 2300
            },
            {
                "month": 8,
                "Production": 2900
            },
            {
                "month": 9,
                "Production": 2500
            },
            {
                "month": 10,
                "Production": 3900
            },
            {
                "month": 11,
                "Production": 4400
            },
            {
                "month": 12,
                "Production": 6000
            }
        ]
    },

    {
        "id": 3,
        "name": "농장3",
        "crops": "딸기",
        "houses": [
            { "id": 0, "name": "하우스1", "active": true },
            { "id": 1, "name": "하우스2", "active": false },
            { "id": 2, "name": "하우스3", "active": false }
        ],
        "annualProduction": [
            {
                "month": 1,
                "Production": 2000
            },
            {
                "month": 2,
                "Production": 1000
            },
            {
                "month": 3,
                "Production": 2500
            },
            {
                "month": 4,
                "Production": 3500
            },
            {
                "month": 5,
                "Production": 1200
            },
            {
                "month": 6,
                "Production": 5000
            },
            {
                "month": 7,
                "Production": 2300
            },
            {
                "month": 8,
                "Production": 2900
            },
            {
                "month": 9,
                "Production": 1500
            },
            {
                "month": 10,
                "Production": 2900
            },
            {
                "month": 11,
                "Production": 1400
            },
            {
                "month": 12,
                "Production": 6000
            }
        ]
    }
]
    ;

export default function handler(request, response) {
    const { method } = request;
    if (method === "GET") {
        return response.status(200).json({
            farms,
        });
    }
}