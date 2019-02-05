const axios = require('axios');
var mensaje="kyc prrooooo :v";
var tel="593960951073 %string%";
const requestBody = "phone="+tel+"&message="+mensaje;
  
const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const url='http://192.168.10.195:8080/v1/sms';

  axios.post(url, requestBody, config)
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