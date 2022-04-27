import React, { useCallback } from 'react';

import 'survey-core/modern.min.css';
import 'survey-core/survey.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import './App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { defaultStandardCss } from 'survey-react';
import { makeStyles } from "@material-ui/core/styles";
StylesManager.applyTheme("modern");

const surveyJson = {
  showProgressBar: "off",
  logoWidth: "1440px",
  pages: [{
      elements: [            
        // {
        //   type: "html",
        //   html: "<h2>5월은 가정의 달. 엄마에 대해 얼마나 알고있나요? </h2>"
        // },
        {
          "type": "image",
          "name": "banner",
          "imageLink": "start2.jpg",
          "imageWidth": "375px",
          "imageHeight": "600px",
          // "imageWidth": "100vw",
          // "imageHeight": "100vh",
          // "maxWidth": "1920px",
          // "minWidth": "100%",
        }]
    }, {
      "title": "01/20",
      "elements": [
            {
              "type": "image",
              "name": "banner1",
              "imageLink": "./1b.jpg",
              "imageWidth": "375px",
              "imageHeight": "320px",
          },
          {
            "type": "boolean",
            "name": "bool1",
            // "title": "Please answer the question",
            // "indent": 30,
            "titleLocation": "top",
            "label": "1-1. 나는 친구와 직장 동료를 포함한 지인들 중 5명 이상의 MBTI를 알고 있다.",
            "isRequired": true,
          },
          {
            "type": "boolean",
            "name": "bool2",
            // "title": "Please answer the question",
            // "indent": 30,
            "titleLocation": "top",
            "label": "1-2. 나는 우리 엄마의 MBTI를 알고 있다.",
            "isRequired": true
          }
      ]
  },  

  {
    "title": "02/20",
    "elements": [
          {
            "type": "image",
            "name": "banner2",
            "imageLink": "./2b.jpg",
            "imageWidth": "375px",
            "imageHeight": "320px",
        },
        {
          "type": "boolean",
          "name": "bool3",
          // "title": "Please answer the question",
          // "indent": 30,
          "titleLocation": "top",
          "label": "2-1. 친구 또는 연인과 함께 찍은 최근 날짜의 사진이 사진첩에 있다.",
          "isRequired": true
        },
        {
          "type": "boolean",
          "name": "bool4",
          // "title": "Please answer the question",
          // "indent": 30,
          "titleLocation": "top",
          "label": "2-2. 엄마와 함께 찍은 최근 날짜의 사진이 사진첩에 있다.",
          "isRequired": true
        }
    ]
}, 

{
  "title": "03/20",
  "elements": [
        {
          "type": "image",
          "name": "banner3",
          "imageLink": "./3a.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool5",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "3-1. 최근 한 달 이내에 주변 사람에게 기프티콘을 선물한 적이 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool6",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "3-2. 최근 한 달 이내에 엄마에게 기프티콘을 선물한 적이 있다.",
        "isRequired": true
      }
  ]
}, {
  "title": "04/20",
  "elements": [
        {
          "type": "image",
          "name": "banner4",
          "imageLink": "./4b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool7",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "4-1. 친구 또는 연인과 여행갈 계획이 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool8",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "4-2. 엄마 또는 가족과 함께 여행갈 계획이 있다.",
        "isRequired": true
      }
  ]
}, {
  "title": "05/20",
  "elements": [
        {
          "type": "image",
          "name": "banner5",
          "imageLink": "./5b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool9",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "5-1. 친구 또는 연인과 함께 영화를 보고 그 영화에 대해 얘기를 나눈 적이 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool10",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "5-2. 엄마와 함께 영화를 보고 그 영화에 대해 얘기를 나눈 적이 있다. ",
        "isRequired": true
      }
  ]
}, {
  "title": "06/20",
  "elements": [
        {
          "type": "image",
          "name": "banner6",
          "imageLink": "./6b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool11",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "6-1. 친구 또는 연인과 함께 노래방에 가서 노래를 부른 적이 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool12",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "6-2. 엄마와 둘이 노래방에 가서 노래를 부른 적이 있다.",
        "isRequired": true
      }
  ]
}, {
  "title": "07/20",
  "elements": [
        {
          "type": "image",
          "name": "banner7",
          "imageLink": "./7b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool13",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "7-1. 최근에 꽃 선물을 받거나 해준 적이 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool14",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "7-2. 엄마에게 꽃 선물을 해준 적이 있다.",
        "isRequired": true
      }
  ]
}, {
  "title": "08/20",
  "elements": [
        {
          "type": "image",
          "name": "banner8",
          "imageLink": "./8b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool15",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "8-1. 친구들에게 직접 요리해 준 적이 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool16",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "8-2. 엄마에게 직접 만든 음식을 대접한 적이 있다.",
        "isRequired": true
      }
  ]
}, {
  "title": "09/20",
  "elements": [
        {
          "type": "image",
          "name": "banner9",
          "imageLink": "./9b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool17",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "9-1. 엄마와 평소에 대화가 잘 안 통하는 편이라고 생각한다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool18",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "9-2. 웬만한 친구보다 우리 엄마랑 수다 떠는 게 더 재밌다.",
        "isRequired": true
      }
  ]
}, {
  "title": "10/20",
  "elements": [
        {
          "type": "image",
          "name": "banner10",
          "imageLink": "./10b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool19",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "10-1. 나는 엄마의 말을 귀 기울여 들어주는 편이다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool20",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "10-2. 엄마가 얘기할 땐 왠지 다른 사람들보다 집중을 덜 하게 된다.",
        "isRequired": true
      }
  ]
}, {
  "title": "11-12/20",
  "elements": [
        {
          "type": "image",
          "name": "banner11-12",
          "imageLink": "./11_12b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool21",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "11. 엄마와 평소에 대화를 자주 하는 편이다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool22",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "12. 엄마와 일주일에 두 번 이상 같이 밥을 먹는다.",
        "isRequired": true
      }
  ]
}, {
  "title": "13-14/20",
  "elements": [
        {
          "type": "image",
          "name": "banner13-14",
          "imageLink": "./13_14b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool23",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "13. 엄마가 어떤 스타일의 옷이 잘 어울리는지 알고 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool24",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "14. 엄마에게 어울리는 립스틱 색깔을 알고 있다.",
        "isRequired": true
      }
  ]
}, {
  "title": "15-16/20",
  "elements": [
        {
          "type": "image",
          "name": "banner15-16",
          "imageLink": "./15_16b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool25",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "15. 나는 엄마의 절친한 친구를 두 명 이상 알고 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool26",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "16. 요즘 엄마가 누구와 시시콜콜한 안부를 주고 받는지 알고 있다.",
        "isRequired": true
      }
  ]
}, {
  "title": "17-19/20",
  "elements": [
        {
          "type": "image",
          "name": "banner17-19",
          "imageLink": "./17_19b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool27",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "17. 엄마와 단 둘이 여행을 가 본 적이 있다.",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "bool28",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "18. 엄마와 함께 예쁜 카페나 흥미로운 전시회에 종종 가곤 한다.",
        "isRequired": true
      },      
      {
        "type": "boolean",
        "name": "bool29",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "19. 최근에 엄마와 함께한 시간 중 즐거웠던 순간을 바로 떠올릴 수 있다.",
        "isRequired": true
      }
  ]
}, {
  "title": "20/20",
  "elements": [
        {
          "type": "image",
          "name": "banner20",
          "imageLink": "./20b.jpg",
          "imageWidth": "375px",
          "imageHeight": "320px",
      },
      {
        "type": "boolean",
        "name": "bool30",
        // "title": "Please answer the question",
        // "indent": 30,
        "titleLocation": "top",
        "label": "엄마에게 손편지를 써 본 적이 있다.",
        "isRequired": true
      }
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
  const classes = useStyles()
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    // const res = JSON.stringify(sender.data);
    const res = sender.data;
    console.log(res)
    var total = 0
    console.log(res)
    if (res.bool1 && !res.bool2 ) {
        total -= 5
    }
    if (res.bool2) {
        total += 5
    }

    if (res.bool3 && !res.bool4 ) {
      total -= 5
    }
    if (res.bool4) {
        total += 5
    }

    if (res.bool5 && !res.bool6 ) {
      total -= 5
    }
    if (res.bool6) {
        total += 5
    }

    if (res.bool7 && !res.bool8 ) {
      total -= 5
    }
    if (res.bool8) {
        total += 5
    }

    if (res.bool9 && !res.bool10 ) {
      total -= 5
    }
    if (res.bool10) {
        total += 5
    }

    if (res.bool11 && !res.bool12 ) {
      total -= 5
    }
    if (res.bool12) {
        total += 5
    }

    if (res.bool13 && !res.bool14 ) {
      total -= 5
    }
    if (res.bool14) {
        total += 5
    }

    if (res.bool15 && !res.bool16 ) {
      total -= 5
    }
    if (res.bool16) {
        total += 5
    }

    if (res.bool17 && !res.bool18 ) {
      total -= 5
    }
    if (res.bool18) {
        total += 5
    }

    if (res.bool19 && !res.bool20 ) {
      total -= 5
    }
    if (res.bool20) {
        total += 5
    }


    if (res.bool21) {
        total += 5
    }
    if (res.bool22) {
        total += 5
    }
    if (res.bool23) {
        total += 5
    }
    if (res.bool24) {
        total += 5
    }
    if (res.bool25) {
        total += 5
    }
    if (res.bool26) {
      total += 5
    }
    if (res.bool27) {
      total += 5
    }
    if (res.bool28) {
      total += 5
    }
    if (res.bool29) {
      total += 5
    }
    if (res.bool30) {
      total += 5
    }

    console.log(total)
    console.log(total.toString())

    document.querySelector('#main')
    .innerHTML = total.toString() + "결과 계산중입니다..."
    window.location.href = "/result/" + total.toString()
  }, []);

  survey.onComplete.add(alertResults);
  
  return (
    <React.Fragment>
      <ThemeProvider theme={TITLE_THEME}>
          <div id="main">
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}} className={classes.buttonStep}>
                <Survey model={survey}/>
            </Box>
          </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

const useStyles = makeStyles({
  buttonStep: {
  //   width: "150px",
  //   height: "49px",
  //   backgroundImage: "linear-gradient(.25turn, #f00, #00f)"
  backgroundImage: "url('/gradient.png')"
  }
});

const TITLE_THEME = createTheme({
  typography: {
   "fontFamily": `"Noto Sans CJK KR", "Black Han Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 100,
   "fontWeightRegular": 200,
   "fontWeightMedium": 300,
  },
  palette: {
    "primary": { main : '#ea6061'}
  }
});

export default MainBody;
