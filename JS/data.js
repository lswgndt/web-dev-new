const students = [
    {
        "_id": 906450,
        "index": 0,
        "firstName": "Lorena",
        "lastName": "Carr",
        "dob": "1978-9-21",
        "gender": "male",
        "department": "Mathematics",
        "email": "lorenacarr@mazuda.com",
        "joiningDate": "2020-1-23"
    },
    {
        "_id": 580045,
        "index": 1,
        "firstName": "Pam",
        "lastName": "Cummings",
        "dob": "1973-11-6",
        "gender": "male",
        "department": "Applied Computer Science",
        "email": "pamcummings@mazuda.com",
        "joiningDate": "2015-7-6"
    },
    {
        "_id": 305149,
        "index": 2,
        "firstName": "Glenna",
        "lastName": "Riley",
        "dob": "2002-4-23",
        "gender": "female",
        "department": "Mathematics",
        "email": "glennariley@mazuda.com",
        "joiningDate": "2019-12-6"
    },
    {
        "_id": 890454,
        "index": 3,
        "firstName": "Holder",
        "lastName": "Carter",
        "dob": "1961-9-17",
        "gender": "female",
        "department": "Mathematics",
        "email": "holdercarter@mazuda.com",
        "joiningDate": "2015-3-6"
    },
    {
        "_id": 532304,
        "index": 4,
        "firstName": "Kim",
        "lastName": "Burns",
        "dob": "1990-8-28",
        "gender": "male",
        "department": "Mathematics",
        "email": "kimburns@mazuda.com",
        "joiningDate": "2016-9-19"
    },
    {
        "_id": 934375,
        "index": 5,
        "firstName": "Hooper",
        "lastName": "Byrd",
        "dob": "1985-1-22",
        "gender": "divers",
        "department": "Applied Computer Science",
        "email": "hooperbyrd@mazuda.com",
        "joiningDate": "2016-3-14"
    },
    {
        "_id": 778104,
        "index": 6,
        "firstName": "Greer",
        "lastName": "England",
        "dob": "1988-5-6",
        "gender": "divers",
        "department": "Mathematics",
        "email": "greerengland@mazuda.com",
        "joiningDate": "2017-6-13"
    },
    {
        "_id": 672290,
        "index": 7,
        "firstName": "Wong",
        "lastName": "Yang",
        "dob": "1999-2-2",
        "gender": "male",
        "department": "Applied Computer Science",
        "email": "wongyang@mazuda.com",
        "joiningDate": "2022-10-3"
    },
    {
        "_id": 696740,
        "index": 8,
        "firstName": "Pace",
        "lastName": "Thompson",
        "dob": "1978-7-25",
        "gender": "divers",
        "department": "Mathematics",
        "email": "pacethompson@mazuda.com",
        "joiningDate": "2022-2-20"
    },
    {
        "_id": 215338,
        "index": 9,
        "firstName": "Cecelia",
        "lastName": "Gibbs",
        "dob": "1990-7-6",
        "gender": "female",
        "department": "Biology",
        "email": "ceceliagibbs@mazuda.com",
        "joiningDate": "2017-7-29"
    },
    {
        "_id": 446783,
        "index": 10,
        "firstName": "Juarez",
        "lastName": "Deleon",
        "dob": "2001-9-18",
        "gender": "female",
        "department": "Applied Computer Science",
        "email": "juarezdeleon@mazuda.com",
        "joiningDate": "2021-8-10"
    },
    {
        "_id": 875902,
        "index": 11,
        "firstName": "Tamra",
        "lastName": "Vargas",
        "dob": "1971-7-28",
        "gender": "divers",
        "department": "Biology",
        "email": "tamravargas@mazuda.com",
        "joiningDate": "2022-4-5"
    },
    {
        "_id": 150172,
        "index": 12,
        "firstName": "Frederick",
        "lastName": "Mercado",
        "dob": "1962-11-24",
        "gender": "female",
        "department": "Biology",
        "email": "frederickmercado@mazuda.com",
        "joiningDate": "2017-3-25"
    },
    {
        "_id": 347158,
        "index": 13,
        "firstName": "Spence",
        "lastName": "Floyd",
        "dob": "1967-12-7",
        "gender": "divers",
        "department": "Biology",
        "email": "spencefloyd@mazuda.com",
        "joiningDate": "2017-10-2"
    },
    {
        "_id": 910626,
        "index": 14,
        "firstName": "Frost",
        "lastName": "Thornton",
        "dob": "1962-10-5",
        "gender": "male",
        "department": "Applied Computer Science",
        "email": "frostthornton@mazuda.com",
        "joiningDate": "2017-5-11"
    },
    {
        "_id": 288082,
        "index": 15,
        "firstName": "Pickett",
        "lastName": "Griffin",
        "dob": "1994-6-21",
        "gender": "male",
        "department": "Biology",
        "email": "pickettgriffin@mazuda.com",
        "joiningDate": "2020-4-24"
    },
    {
        "_id": 529187,
        "index": 16,
        "firstName": "Krystal",
        "lastName": "Bolton",
        "dob": "1978-2-30",
        "gender": "female",
        "department": "Mathematics",
        "email": "krystalbolton@mazuda.com",
        "joiningDate": "2019-11-1"
    },
    {
        "_id": 614295,
        "index": 17,
        "firstName": "Lena",
        "lastName": "Mclaughlin",
        "dob": "1972-2-3",
        "gender": "female",
        "department": "Applied Computer Science",
        "email": "lenamclaughlin@mazuda.com",
        "joiningDate": "2018-9-16"
    },
    {
        "_id": 206103,
        "index": 18,
        "firstName": "Annmarie",
        "lastName": "Barr",
        "dob": "1974-8-16",
        "gender": "male",
        "department": "Biology",
        "email": "annmariebarr@mazuda.com",
        "joiningDate": "2020-3-18"
    },
    {
        "_id": 947300,
        "index": 19,
        "firstName": "Bernard",
        "lastName": "Pierce",
        "dob": "1965-4-23",
        "gender": "female",
        "department": "Applied Computer Science",
        "email": "bernardpierce@mazuda.com",
        "joiningDate": "2018-3-5"
    }
]

const staff = [
    {
        "_id": 892811,
        "index": 0,
        "firstName": "Maldonado",
        "lastName": "Hinton",
        "dob": "1993-1-28",
        "gender": "male",
        "email": "maldonadohinton@mazuda.com"
    },
    {
        "_id": 877837,
        "index": 1,
        "firstName": "Byrd",
        "lastName": "Richardson",
        "dob": "1984-5-10",
        "gender": "male",
        "email": "byrdrichardson@mazuda.com"
    },
    {
        "_id": 582194,
        "index": 2,
        "firstName": "Hollie",
        "lastName": "Jones",
        "dob": "1980-1-9",
        "gender": "female",
        "email": "holliejones@mazuda.com"
    },
    {
        "_id": 969819,
        "index": 3,
        "firstName": "Roslyn",
        "lastName": "Dillon",
        "dob": "1981-10-28",
        "gender": "female",
        "email": "roslyndillon@mazuda.com"
    },
    {
        "_id": 250370,
        "index": 4,
        "firstName": "Burks",
        "lastName": "Sloan",
        "dob": "1979-3-22",
        "gender": "male",
        "email": "burkssloan@mazuda.com"
    },
    {
        "_id": 917219,
        "index": 5,
        "firstName": "Leona",
        "lastName": "Hurst",
        "dob": "1986-8-18",
        "gender": "divers",
        "email": "leonahurst@mazuda.com"
    },
    {
        "_id": 869867,
        "index": 6,
        "firstName": "Mcgee",
        "lastName": "Parrish",
        "dob": "2000-12-4",
        "gender": "male",
        "email": "mcgeeparrish@mazuda.com"
    },
    {
        "_id": 775972,
        "index": 7,
        "firstName": "Beatriz",
        "lastName": "York",
        "dob": "1996-9-20",
        "gender": "female",
        "email": "beatrizyork@mazuda.com"
    },
    {
        "_id": 149050,
        "index": 8,
        "firstName": "Bridget",
        "lastName": "Reed",
        "dob": "1976-3-20",
        "gender": "divers",
        "email": "bridgetreed@mazuda.com"
    },
    {
        "_id": 466011,
        "index": 9,
        "firstName": "Verna",
        "lastName": "Kelly",
        "dob": "1997-2-8",
        "gender": "divers",
        "email": "vernakelly@mazuda.com"
    },
    {
        "_id": 920553,
        "index": 10,
        "firstName": "Sharron",
        "lastName": "Franco",
        "dob": "1967-11-20",
        "gender": "male",
        "email": "sharronfranco@mazuda.com"
    },
    {
        "_id": 176717,
        "index": 11,
        "firstName": "Dorsey",
        "lastName": "Rasmussen",
        "dob": "1993-11-2",
        "gender": "divers",
        "email": "dorseyrasmussen@mazuda.com"
    },
    {
        "_id": 869237,
        "index": 12,
        "firstName": "Love",
        "lastName": "Bryant",
        "dob": "1992-7-2",
        "gender": "male",
        "email": "lovebryant@mazuda.com"
    },
    {
        "_id": 122273,
        "index": 13,
        "firstName": "Adriana",
        "lastName": "Combs",
        "dob": "1976-2-18",
        "gender": "female",
        "email": "adrianacombs@mazuda.com"
    },
    {
        "_id": 358131,
        "index": 14,
        "firstName": "Lawson",
        "lastName": "Shepherd",
        "dob": "1971-11-14",
        "gender": "female",
        "email": "lawsonshepherd@mazuda.com"
    },
    {
        "_id": 275089,
        "index": 15,
        "firstName": "Cheryl",
        "lastName": "Howell",
        "dob": "1965-3-1",
        "gender": "divers",
        "email": "cherylhowell@mazuda.com"
    },
    {
        "_id": 590744,
        "index": 16,
        "firstName": "Sabrina",
        "lastName": "Sharp",
        "dob": "1968-5-29",
        "gender": "male",
        "email": "sabrinasharp@mazuda.com"
    },
    {
        "_id": 207486,
        "index": 17,
        "firstName": "Fowler",
        "lastName": "Hopper",
        "dob": "1968-4-9",
        "gender": "female",
        "email": "fowlerhopper@mazuda.com"
    },
    {
        "_id": 559582,
        "index": 18,
        "firstName": "Craft",
        "lastName": "Spence",
        "dob": "1967-12-28",
        "gender": "female",
        "email": "craftspence@mazuda.com"
    },
    {
        "_id": 885047,
        "index": 19,
        "firstName": "Laverne",
        "lastName": "Peterson",
        "dob": "1986-12-18",
        "gender": "divers",
        "email": "lavernepeterson@mazuda.com"
    }
]