REST APIs DOCUMENTATION.

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