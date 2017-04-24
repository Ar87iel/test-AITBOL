var frisby = require('frisby');
frisby.create('Spec accidents')
    .get('http://localhost:8080/api/accidents')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss();

frisby.create('Spec accidents')
    .get('http://localhost:8080/api/accidents/23')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

    .toss();

frisby.create('Spec accidents')
    .delete('http://localhost:8080/api/accidents/67')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

frisby.create('Spec accidents')
    .post('http://localhost:8080/api/accidents',
        {
            type: "accident/stole",
            place: "ayacucho",
            date: "10/04/2017 15:12",
            wasMoving: "yes",
            complaintNumber: "2569875",
            idInsurance: 45
        },
        { json: true },
        { headers: { 'Content-Type': 'application/json' }})
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss();