import * as React from 'react';
import ApexCharts from 'react-apexcharts';




export default function DetailChart(score) {
    const data = {
    
        series: [{
            name: '점수',
            type: 'column',
            data: [score.value, 70]
          }, 
        ],
          // colors: ["#ea6061", "#4876af"],
          options: {
            chart: {
            //   height: 350,
            //   width: 400,
              type: 'line',
              toolbar: false,
            },
            stroke: {
              width: [0, 4]
            },
            title: {
            //   text: '일일 거래량'
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: [1]
            },
            xaxis: {
              type: 'text',
              categories: [
                ['나의 점수'], 
                ['평균 점수']
              ],
              labels: {
                style: {
                  colors: ["#ea6061", "#4876af"],
                  fontSize: '16px'
                }
              },
            },
            yaxis: [{
              title: {
                // text: '만주',
              },
            
            }, 
            // {
            //   opposite: true,
            //   title: {
            //     text: ''
            //   }
            // }
            ]
        } 
    }

        return (
            <div id="chart">
                <ApexCharts options={data.options} series={data.series} type="line" height={300} width={'100%'} />
            </div>
        );
    
}
