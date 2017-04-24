var frisby = require('frisby');
frisby.create('Spec insurance')
    .get('http://localhost:8080/api/insurances')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss();

frisby.create('Spec insurance')
    .get('http://localhost:8080/api/insurances/74')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

    .toss();

frisby.create('Spec insurance')
    .delete('http://localhost:8080/api/insurances/67')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

frisby.create('Spec customers')
    .post('http://localhost:8080/api/insurances',
        {
            name: "c",
            limitAmount:"n",
            expirationDate:"15/04/2017 14:15",
            type:"plateado/dorado",
            maintenanceDate: "15/04/2017 14:15",
            accidents:[
            ],
            vType:"minivan 11",
            vMake:"toyota",
            vModelo: "rav4(11,444) 11",
            vYear:2000,
            vMileage:4000,
            vPlate: "c"
        },
        { json: true },
        { headers: { 'Content-Type': 'application/json' }})
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss();