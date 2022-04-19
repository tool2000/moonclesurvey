import React, { useCallback } from 'react';

import 'survey-core/modern.min.css';
// import 'survey-core/survey.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import './App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
StylesManager.applyTheme("modern");

const surveyJson = {
  showProgressBar: "off",
  pages: [{
      elements: [            
        {
          type: "html",
          html: "<h2>5월은 가정의 달. 엄마에 대해 얼마나 알고있나요? </h2>"
        },{
        "type": "image",
        "name": "banner",
        "imageLink": "./intro.png",
        "imageWidth": "400px",
        "imageHeight": "300px",
        
        }]
    }, {
      "title": "01/20",
      "elements": [
            {
              "type": "image",
              "name": "banner",
              "imageLink": "./mom1.jpg",
              "imageWidth": "400px",
              "imageHeight": "300px",
          },
          {
            "type": "boolean",
            "name": "bool1",
            // "title": "Please answer the question",
            // "indent": 30,
            "titleLocation": "top",
            "label": "친구, 선생님, 동료 등 주변 5명 이상의 MBTI를 알고 있다.",
            "isRequired": true,
            "valueTrue": "1",
            "valueFalse": "0"
          },
          {
            "type": "boolean",
            "name": "bool2",
            // "title": "Please answer the question",
            // "indent": 30,
            "titleLocation": "top",
            "label": "나는 우리 엄마의 MBTI를 알고 있다.",
            "isRequired": true
          }
      ]
  },  

  {
    "title": "02/20",
    "elements": [
          {
            "type": "image",
            "name": "banner",
            "imageLink": "./mom2.jpg",
            "imageWidth": "400px",
            "imageHeight": "300px",
        },
        {
          "type": "boolean",
          "name": "bool3",
          // "title": "Please answer the question",
          // "indent": 30,
          "titleLocation": "top",
          "label": "친구 또는 연인과 함께 찍은 최근 날짜의 사진이 사진첩에 있다.",
          "isRequired": true
        },
        {
          "type": "boolean",
          "name": "bool4",
          // "title": "Please answer the question",
          // "indent": 30,
          "titleLocation": "top",
          "label": "최근 한 달 이내에 주변 사람에게 기프티콘을 선물한 적이 있다.",
          "isRequired": true
        }
    ]
}, 

{
  "title": "03/20",
  "elements": [
        {
          "type": "image",
          "name": "banner",
          "imageLink": "./mom3.jpg",
          "imageWidth": "400px",
          "imageHeight": "300px",
      },
    //   {
    //     "type": "boolean",
    //     "name": "bool5",
    //     // "title": "Please answer the question",
    //     // "indent": 30,
    //     "titleLocation": "top",
    //     "label": "친구, 선생님, 동료 등 주변 5명 이상의 MBTI를 알고 있다.",
    //     "isRequired": true
    //   },
    //   {
    //     "type": "boolean",
    //     "name": "bool6",
    //     // "title": "Please answer the question",
    //     // "indent": 30,
    //     "titleLocation": "top",
    //     "label": "나는 우리 엄마의 MBTI를 알고 있다.",
    //     "isRequired": true
    //   }
  ]
}, 
],
  showQuestionNumbers: "off",
  pageNextText: "다음",
  completeText: "결과보기",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "테스트 시작하기",
  completedHtml: "",
  // showPreviewBeforeComplete: "showAnsweredQuestions"
  showPreviewBeforeComplete: "false",
};

function MainBody() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    // const res = JSON.stringify(sender.data);
    const res = sender.data;

    var total = 0
    console.log(res)
    if (res.bool1) {
        total += 1
    }
    if (res.bool2) {
        total += 1
    }
    console.log(total)
    console.log(total.toString())

    document.querySelector('#main')
    .innerHTML = "Result : " + total.toString() + "결과 계산중입니다..."
    window.location.href = "/result/" + total.toString()
  }, []);

  survey.onComplete.add(alertResults);
  
  return (
    <React.Fragment>
      <ThemeProvider theme={TITLE_THEME}>
          <div id="main">
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Survey model={survey}/>
            </Box>
          </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

const TITLE_THEME = createTheme({
  typography: {
   "fontFamily": `"Noto Sans CJK KR", "Black Han Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 100,
   "fontWeightRegular": 200,
   "fontWeightMedium": 300
  }
});

export default MainBody;