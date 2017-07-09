// npm install --save express body-parse-cors 설치한 기능 가져오기
const express = require('express');
// app에 express 접목
const app =  express();

// npm install --save express body-parse-cors 설치한 기능 가져오기
const bodyParser = require('body-parser');
const cors = require('cors')(); // 정보를 가져갈 수 있도록 설정

app.use(cors);
app.use(bodyParser.urlencoded({ extended:true })); // json 형태로 쓸수 잇도록 설정
app.use(bodyParser.json());


// '/phone' : rest
app.get('/phone',function (request,response) {
  // response.send('hi');
  const state = {
    data : [
      {name : '아무개1', phone : '010-1111-1111', jab : 'frontend' },
      {name : '김무개2', phone : '010-2222-1111', jab : 'designer' },
      {name : '정무개3', phone : '010-3333-1111', jab : 'project manager' },
    ]
  }
  response.json(state);
});

app.listen(4000);


// cmd > node server.js (서버 열기)
// 3000, 4000(서버) 로 그냥 내가 구분해줬을뿐
