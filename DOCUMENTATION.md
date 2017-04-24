#            REST APIs DOCUMENTATION.

CUSTOMERS GET
-------------

```sh

# url get:
http://localhost:8080/api/customers/:id

# Required:
id=[integer]

# Success Response:
# Code: 200
{
  "name": "c",
  "lastName": "Garcia",
  "ci": 6767890,
  "direccion": "Av. panamericana",
  "idInsurances": [
    {
      "idInsurance": 1
    }
  ],
  "id": "0"
}

# Error Response:
Code: 404 NOT FOUND

```

CUSTOMERS POST
--------------

```sh

# url post:
http://localhost:8080/api/customers

# Json format:
{
	"name": "c",
	"lastName": "Garcia",
	"ci": 6767890,
	"direccion": "Av. panamericana",
	"idInsurances":[
		{ "idInsurance": 1 }
	]
}

# Success Response:
# Code: 200
{
  "name": "c",
  "lastName": "Garcia",
  "ci": 6767890,
  "direccion": "Av. panamericana",
  "idInsurances": [
    {
      "idInsurance": 1
    }
  ],
  "id": "0"
}

# Error Response:
Code: 404 NOT FOUND

```

CUSTOMERS PUT
-------------

```sh

# url put:
http://localhost:8080/api/customers/0

# Json format:
{
	"name": "c",
	"lastName": "Garcia",
	"ci": 6767890,
	"direccion": "Av. panamericana",
	"idInsurances":[
		{ "idInsurance": 1 }
	]
}

# Success Response:
# Code: 200

# Error Response:
Code: 404 NOT FOUND

```

CUSTOMERS DELETE
----------------

```sh

# url put:
http://localhost:8080/api/customers/0

# Success Response:
# Code: 200

# Error Response:
Code: 404 NOT FOUND

```

===================================================

INSURANCES GET
-------------

```sh

# url get:
http://localhost:8080/api/insurances/:id

# Required:
id=[integer]

# Success Response:
# Code: 200
{
  "name": "c",
  "limitAmount": "n",
  "expirationDate": "15/04/2017 14:15",
  "type": "plateado/dorado",
  "maintenanceDate": "15/04/2017 14:15",
  "accidents": [],
  "vType": "minivan 11",
  "vMake": "toyota",
  "vModelo": "rav4(11,444) 11",
  "vYear": 2000,
  "vMileage": 4000,
  "vPlate": "c",
  "id": "0"
}

# Error Response:
Code: 404 NOT FOUND

```

INSURANCES POST
--------------

```sh

# url post:
http://localhost:8080/api/insurances

# Json format:
{
	"name": "c",
	"limitAmount":"n",
	"expirationDate":"15/04/2017 14:15",
	"type":"plateado/dorado",
	"maintenanceDate": "15/04/2017 14:15",
	"accidents":[
	],
	"vType":"minivan 11",
	"vMake":"toyota",
	"vModelo": "rav4(11,444) 11",
	"vYear":2000,
	"vMileage":4000,
	"vPlate": "c"
}

# Success Response:
# Code: 200
{
  "name": "c",
  "limitAmount": "n",
  "expirationDate": "15/04/2017 14:15",
  "type": "plateado/dorado",
  "maintenanceDate": "15/04/2017 14:15",
  "accidents": [],
  "vType": "minivan 11",
  "vMake": "toyota",
  "vModelo": "rav4(11,444) 11",
  "vYear": 2000,
  "vMileage": 4000,
  "vPlate": "c",
  "id": "0"
}

# Error Response:
Code: 404 NOT FOUND

```

INSURANCES PUT
-------------

```sh

# url put:
http://localhost:8080/api/customers/0

# Json format:
{
	"name": "c",
	"limitAmount":"n",
	"expirationDate":"15/04/2017 14:15",
	"type":"plateado/dorado",
	"maintenanceDate": "15/04/2017 14:15",
	"accidents":[
	],
	"vType":"minivan 11",
	"vMake":"toyota",
	"vModelo": "rav4(11,444) 11",
	"vYear":2000,
	"vMileage":4000,
	"vPlate": "c"
}

# Success Response:
# Code: 200

# Error Response:
Code: 404 NOT FOUND

```

CUSTOMERS DELETE
----------------

```sh

# url put:
http://localhost:8080/api/insurances/0

# Success Response:
# Code: 200

# Error Response:
Code: 404 NOT FOUND

```

===================================================

ACCIDENT GET
------------

```sh

# url get:
http://localhost:8080/api/accidents/:id

# Required:
id=[integer]

# Success Response:
# Code: 200
{
    "type": "accident/stole",
    "place": "ayacucho",
    "date": "11/04/2017 15:12",
    "wasMoving": "yes",
    "complaintNumber": "2569875",
    "idInsurance": 45,
    "id": "0"
  }

# Error Response:
Code: 404 NOT FOUND

```

ACCIDENTS POST
--------------

```sh

# url post:
http://localhost:8080/api/accidents

# Json format:
{
	"type": "accident/stole",
	"place": "ayacucho",
	"date": "10/04/2017 15:12",
	"wasMoving": "yes",
	"complaintNumber": "2569875",
	"idInsurance": 45
}

# Success Response:
# Code: 200
{
    "type": "accident/stole",
    "place": "ayacucho",
    "date": "11/04/2017 15:12",
    "wasMoving": "yes",
    "complaintNumber": "2569875",
    "idInsurance": 45,
    "id": "0"
  }

# Error Response:
Code: 404 NOT FOUND

```

ACCIDENTS PUT
-------------

```sh

# url put:
http://localhost:8080/api/accidents/0

# Json format:
{
	"type": "accident/stole",
	"place": "ayacucho",
	"date": "10/04/2017 15:12",
	"wasMoving": "yes",
	"complaintNumber": "2569875",
	"idInsurance": 45
}


# Success Response:
# Code: 200

# Error Response:
Code: 404 NOT FOUND

```

ACCIDENTS DELETE
----------------

```sh

# url put:
http://localhost:8080/api/accidents/0

# Success Response:
# Code: 200

# Error Response:
Code: 404 NOT FOUND

```
===================================================

INSURANCE GET SORT BY "vPlate"
------------------------------

```sh

# url get:
http://localhost:8080/api/insurances

# Success Response:
# Code: 200
[
  {
    "name": "c",
    "limitAmount": "n",
    "expirationDate": "15/04/2017 14:15",
    "type": "plateado/dorado",
    "maintenanceDate": "15/04/2017 14:15",
    "accidents": [],
    "vType": "minivan 11",
    "vMake": "toyota",
    "vModelo": "rav4(11,444) 11",
    "vYear": 2000,
    "vMileage": 4000,
    "vPlate": "c",
    "id": "0"
  }
]

```


ACCIDENT GET SORT BY "date"
------------------------------

```sh

# url get:
http://localhost:8080/api/insurances

# Success Response:
# Code: 200
[
  {
    "type": "accident/stole",
    "place": "ayacucho",
    "date": "10/04/2017 15:12",
    "wasMoving": "yes",
    "complaintNumber": "2569875",
    "idInsurance": 45,
    "id": "0"
  }
]

```
