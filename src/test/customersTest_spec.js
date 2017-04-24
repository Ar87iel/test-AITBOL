var frisby = require('frisby');
frisby.create('Spec customers')
    .get('http://localhost:8080/api/customers')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss();


frisby.create('Spec customers')
    .get('http://localhost:8080/api/customers/56')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

    .toss();

frisby.create('Spec customers')
    .delete('http://localhost:8080/api/customers/533')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

    .toss();


frisby.create('Spec customers')
    .post('http://localhost:8080/api/customers',
        {
            name: "c",
            lastName: "Garcia",
            ci: 6767890,
            direccion: "Av. panamericana",
            idInsurances:[
                { "idInsurance": 1 }
            ]
        },
        { json: true },
        { headers: { 'Content-Type': 'application/json' }})
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss()