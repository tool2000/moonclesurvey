import React, { useCallback } from 'react';
import 'survey-core/modern.min.css';
// import 'survey-core/survey.min.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import './App.css';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import bgImage from './background.jpg';
import { makeStyles } from "@material-ui/core/styles";
import DetailChart from './detailChart';

const useStyles = makeStyles({
    buttonStep: {
    //   width: "150px",
    //   height: "49px",
    //   backgroundImage: "linear-gradient(.25turn, #f00, #00f)"
    backgroundImage: "url('/result_back.jpg')"
    }
  });

function ResultPage() {
  const { total } = useParams()
  const classes = useStyles()
  return (
    <React.Fragment>
        <CssBaseline />      
          <Container maxWidth="sm" sx={{margin: 'auto', p:0}}>
            <Stack spacing={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <ThemeProvider theme={TITLE_THEME}>
                    <Box sx={{ minWidth: 275, width: '100%'}} >
                        <Card >
                        {/* <Card style={{ border: "none", boxShadow: "none"}}> */}
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}} className={classes.buttonStep} >
                                <Typography variant="h5" component="div">
                                    당신의 점수는? 
                                </Typography>
                                <Typography variant="h2" component="div" color="#4876AF">
                                     {total} 점 
                                </Typography>

                                <DetailChart value={total}/>

                                {/* <Typography variant="h5" component="div">
                                    엄마에 대해 얼마나 잘 알고 계신가요?
                                </Typography>
                                <Typography variant="body2" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%'}}>
                                    아직도 성인이 된 게 어색한 나, 
                                    어른이 된 딸이 처음이라 서툰 엄마.
                                    둘의 대화가 점점 줄어드는 요즘,
                                    5월 가정의달을 맞이하여 조금더 가까워지는 시간을
                                    가져보는 건 어떨까요?
                                </Typography>
                                <Typography variant="h5" component="div">
                                   [ 엄마와 딸의 교환일기 ]
                                </Typography> */}
                                <img src="/result562_img.jpg" width="100%"/>

                            </CardContent>  
                        </Card>

                        

                    </Box>
                </ThemeProvider>
         
            </Stack>
        </Container>
    </React.Fragment>
  )
}

const TITLE_THEME = createTheme({
  typography: {
   "fontFamily": `"Noto Sans CJK KR", "Black Han Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  },
});

export default ResultPage;
