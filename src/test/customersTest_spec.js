var frisby = require('frisby');
frisby.create('Spec customers')
    .get('http://localhost:8080/api/customers')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .toss();


frisby.create('Spec customers')
    .get('http://localhost:8080/api/customers/0')
    .expectStatus(404)
    .expectHeaderContains('content-type', 'text/html')

    .toss();