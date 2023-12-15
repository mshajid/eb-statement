// Creating Database
const database = [
  {
    id: 1,
    accountNum: 1029384756,
    holderName: "Jack",
    holderAddress: "5396 North Reese Avenue, Fresno CA 93722",
    units: 121
  },
  {
    id: 2,
    accountNum: 1029384757,
    holderName: "Jil",
    holderAddress: "2685 California Street, Mountain View CA 94040",
    units: 170
  },
  {
    id: 3,
    accountNum: 1029384758,
    holderName: "Prince",
    holderAddress: "2443 Sierra Nevada Road, Mammoth Lakes CA 93546",
    units: 150
  },
  {
    id: 4,
    accountNum: 1029384759,
    holderName: "Jennifer Bruce",
    holderAddress: "2035 Ninth Street, Berkeley CA 94710",
    units: 169
  },
  {
    id: 5,
    accountNum: 1029384760,
    holderName: "Uriah Norton",
    holderAddress: "4439 Gale Street, Livermore CA 94550",
    units: 170
  },
  {
    id: 6,
    accountNum: 1029384761,
    holderName: "Kylee Winters",
    holderAddress: "3959 Fairlands Drive, Pleasanton CA 94588",
    units: 169
  },
  {
    id: 7,
    accountNum: 1029384762,
    holderName: "Allie Berger",
    holderAddress: "2042 High Street, Oakland CA 94601",
    units: 180
  },
  {
    id: 8,
    accountNum: 1029384763,
    holderName: "Deandre Serrano",
    holderAddress: "2335 Orchard View Lane, Escondido CA 92027",
    units: 190
  },
  {
    id: 9,
    accountNum: 1029384764,
    holderName: "Byron Osborne",
    holderAddress: "9036 Calico Court, Hesperia CA 92344",
    units: 200
  },
  {
    id: 10,
    accountNum: 1029384765,
    holderName: "Adam Randolph",
    holderAddress: "37675 Fremont Boulevard, Fremont CA 94536",
    units: 300
  },
  {
    id: 11,
    accountNum: 1029384766,
    holderName: "Kailey Cochran",
    holderAddress: "10826 Pointe Royal Drive, Bakersfield CA 93311",
    units: 259
  },
  {
    id: 12,
    accountNum: 1029384767,
    holderName: "Danny Conner",
    holderAddress: "6244 Sun River Drive, Sacramento CA 95824",
    units: 500
  },
  {
    id: 13,
    accountNum: 1029384768,
    holderName: "Alondra Estrada",
    holderAddress: "6244 Sun River Drive, Sacramento CA 95824",
    units: 800
  },
  {
    id: 14,
    accountNum: 1029384769,
    holderName: "Phoenix Donaldson",
    holderAddress: "6431 Shattuck Avenue, Oakland CA 94609",
    units: 799
  },
  {
    id: 15,
    accountNum: 1029384770,
    holderName: "Natasha Dillon",
    holderAddress: "1219 Carleton Street, Berkeley CA 94702",
    units: 635
  },
  {
    id: 16,
    accountNum: 1029384771,
    holderName: "Alvin Jackson",
    holderAddress: "11522 Country Spring Court, Cupertino CA 95014",
    units: 115
  },
  {
    id: 17,
    accountNum: 1029384772,
    holderName: "Avery Banks",
    holderAddress: "1732 27th Avenue, Oakland CA 94601",
    units: 205
  },
  {
    id: 18,
    accountNum: 1029384773,
    holderName: "Martin Wu",
    holderAddress: "125 John Street, Santa Cruz CA 95060",
    units: 369
  },
  {
    id: 19,
    accountNum: 1029384774,
    holderName: "Liana Wilkinson",
    holderAddress: "1797 Pasatiempo Drive, Chico CA 95928",
    units: 756
  },
  {
    id: 20,
    accountNum: 1029384775,
    holderName: "Leonard Fowler",
    holderAddress: "1528 Stafford Avenue, Hayward CA 94541",
    units: 378
  },
  {
    id: 21,
    accountNum: 1029384776,
    holderName: "Lennon Evans",
    holderAddress: "2747 68th Avenue, Oakland CA 94605",
    units: 425
  },
  {
    id: 22,
    accountNum: 1029384777,
    holderName: "Elias Cantu",
    holderAddress: "310 12th Avenue, Santa Cruz CA 95062",
    units: 529
  },
  {
    id: 23,
    accountNum: 1029384778,
    holderName: "Galilea Walters",
    holderAddress: "6145 East Castro Valley Boulevard, Castro Valley CA 94552",
    units: 825
  },
  {
    id: 24,
    accountNum: 1029384779,
    holderName: "Colson Berg",
    holderAddress: "3835 Oakes Drive, Hayward CA 94542",
    units: 489
  },
  {
    id: 25,
    accountNum: 1029384780,
    holderName: "Emmalyn Cross",
    holderAddress: "90 Via Verde, San Lorenzo CA 94580",
    units: 102
  },
  {
    id: 26,
    accountNum: 1029384781,
    holderName: "Fabian Williamson",
    holderAddress: "918 Cheryl Ann Circle, Hayward CA 94544",
    units: 50
  },
  {
    id: 27,
    accountNum: 1029384782,
    holderName: "Catherine Rivas",
    holderAddress: "970 Old Oak Road, Livermore CA 94550",
    units: 801
  },
  {
    id: 28,
    accountNum: 1029384783,
    holderName: "Damon Waters",
    holderAddress: "2335 Orchard View Lane, Escondido CA 92027",
    units: 938
  },
  {
    id: 29,
    accountNum: 1029384784,
    holderName: "Bristol Buckley",
    holderAddress: "4439 Gale Street, Livermore CA 94550",
    units: 568
  },
  {
    id: 30,
    accountNum: 1029384785,
    holderName: "Aryan Ibarra",
    holderAddress: "4500 Margalo Avenue, Bakersfield CA 93313",
    units: 28
  },
  {
    id: 31,
    accountNum: 1029384786,
    holderName: "Madilynn Esparza",
    holderAddress: "26466 Mockingbird Lane, Hayward CA 94544",
    units: 478
  },
  {
    id: 32,
    accountNum: 1029384787,
    holderName: "Carl Strong",
    holderAddress: "968 Virginia Avenue, Olivehurst CA 95961",
    units: 986
  },
  {
    id: 33,
    accountNum: 1029384788,
    holderName: "Margo Martin",
    holderAddress: "6420 Via Baron, Rancho Palos Verdes CA 90275",
    units: 302
  },
  {
    id: 34,
    accountNum: 1029384789,
    holderName: "Mateo Stevens",
    holderAddress: "9036 Calico Court, Hesperia CA 92344",
    units: 289
  },
  {
    id: 35,
    accountNum: 1029384790,
    holderName: "Katherine Hunt",
    holderAddress: "2414 Parker Street, Berkeley CA 94704",
    units: 366
  },
  {
    id: 36,
    accountNum: 1029384791,
    holderName: "Jesus Hughes",
    holderAddress: "553 South Arlington Road, Orange CA 92869",
    units: 105
  },
  {
    id: 37,
    accountNum: 1029384792,
    holderName: "Samantha Mendez",
    holderAddress: "19416 Barclay Road, Castro Valley CA 94546",
    units: 204
  },
  {
    id: 38,
    accountNum: 1029384793,
    holderName: "Arthur Butler",
    holderAddress: "732 Kevin Court, Oakland CA 94621",
    units: 355
  },
  {
    id: 39,
    accountNum: 1029384794,
    holderName: "Athena Moran",
    holderAddress: "236 Alden Road, Hayward CA 94541",
    units: 789
  },
  {
    id: 40,
    accountNum: 1029384795,
    holderName: "Tate Norris",
    holderAddress: "5396 North Reese Avenue, Fresno CA 93722",
    units: 71
  },
  {
    id: 41,
    accountNum: 1029384796,
    holderName: "Arielle Bradley",
    holderAddress: "107 Guaymas Place, Davis CA 95616",
    units: 200
  },
  {
    id: 42,
    accountNum: 1029384797,
    holderName: "Richard Ho",
    holderAddress: "4016 Doane Street, Fremont CA 94538",
    units: 109
  },
  {
    id: 43,
    accountNum: 1029384798,
    holderName: "Calliope McKenzie",
    holderAddress: "560 Penstock Drive, Grass Valley CA 95945",
    units: 890
  },
  {
    id: 44,
    accountNum: 1029384799,
    holderName: "Scott Morgan",
    holderAddress: "1011 Devon Drive, Hayward CA 94542",
    units: 895
  },
  {
    id: 45,
    accountNum: 1029384800,
    holderName: "Delilah Strong",
    holderAddress: "36043 Soapberry Commons, Fremont CA 94536",
    units: 1000
  },
  {
    id: 46,
    accountNum: 1029384801,
    holderName: "Axl Li",
    holderAddress: "136 Acacia Drive, Blue Lake CA 95525",
    units: 10
  },
  {
    id: 47,
    accountNum: 1029384802,
    holderName: "Paige O’Donnell",
    holderAddress: "38676 Greenwich Circle, Fremont CA 94536",
    units: 678
  },
  {
    id: 48,
    accountNum: 1029384803,
    holderName: "Lian Wall",
    holderAddress: "152 Holly Court, Mountain View CA 94043",
    units: 201
  },
  {
    id: 49,
    accountNum: 1029384804,
    holderName: "Jayda Garrett",
    holderAddress: "1314 89th Avenue, Oakland CA 94621",
    units: 398
  },
  {
    id: 50,
    accountNum: 1029384804,
    holderName: "Kairo Hester",
    holderAddress: "3538 Mendenhall Court, Pleasanton CA 94588",
    units: 700
  }
];


