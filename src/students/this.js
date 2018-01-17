var students = 
[
    {"name":"Jodoc Hafsah",
    "picture":"https://randomuser.me/api/portraits/men/87.jpg",
    "_id":"5a5f411642c570522674f0ef",
    "ratings":  [
        {
            "colour": 0,
            "comments": "Student is obviously struggling.",
            "_id":"5a5f411642c570522674f0f1",
            "ratedAt":"2017-10-24T00:00:00.000Z"
            },{

            "colour":1,
            "comments": "Progress is being made.",
            "_id":"5a5f411642c570522674f0f0",
            "ratedAt":"2017-08-29T00:00:00.000Z"
            }
        ]
    }
]

var name = students.filter(i => i.name)
console.log(name)