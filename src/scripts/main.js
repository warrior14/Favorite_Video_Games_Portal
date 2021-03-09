fetch('http://localhost:8088/pokemon').then(response =>  response.json()).then(data => {
    console.log('data', data);
})
