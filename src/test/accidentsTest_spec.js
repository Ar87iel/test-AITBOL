var frisby = require('frisby');
frisby.create('Spec accidents')
    .get('http://localhost:8080/api/accidents')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss();

frisby.create('Spec accidents')
    .get('http://localhost:8080/api/accidents/2')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

    .toss();