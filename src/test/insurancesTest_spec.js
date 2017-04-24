var frisby = require('frisby');
frisby.create('Spec insurance')
    .get('http://localhost:8080/api/insurances')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss();

frisby.create('Spec insurance')
    .get('http://localhost:8080/api/insurances/7')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

    .toss();