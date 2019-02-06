const axios = require('axios');

var mensaje="este es el mensaje";
var tel="593960951073";
var re=[
    {
      "phone_number":tel,
      "message": mensaje,
      "device_id": 109241
    }
  ];
const requestBody = "phone="+tel+"&message="+mensaje;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbiIsImlhdCI6MTU0OTQwMjM3MywiZXhwIjo0MTAyNDQ0ODAwLCJ1aWQiOjY3Nzk1LCJyb2xlcyI6WyJST0xFX1VTRVIiXX0.3I23eFpjsM_7o6oJKLg_If0w1pJcRk080e6iRNWIVQY'
    }
  }
  const url='https://smsgateway.me/api/v4/message/send';

  axios.post(url, re, config)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
  })

//axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
/*axios.get('http://localhost:3000/no')
.then(response => {
    console.log("res");
    //console.log(response);
    //console.log(response.data);
   var stat=response.status;
   console.log(stat);
    if(stat==200){
        console.log("login ok");
    }
    else if(stat==204){
        console.log("error login");
    }
    else{
        console.log("error");
    }
    
    //console.log(response.data.url);
    //console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });*/