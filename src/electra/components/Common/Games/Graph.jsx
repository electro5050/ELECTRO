import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
 import './Graph.css';
import axios from 'common/electra_axios';
import ProgressBar from 'electra/components/Common/Games/ProgressBar';
import { connect } from 'react-redux';

function getNextExponentialValue(number) {
    const remainder = number % 10;
    let  nextMultipleOf100 = remainder === 0 ? number : number + (10 - remainder);
    if(nextMultipleOf100 < 10){
      nextMultipleOf100 = 10;
    }
    return nextMultipleOf100;
  }

  const calculateMaxValue = (data, key) => {
    return Math.max(...data.map(item => item[key]));
  };

function LineChart({websocketData }) {
    const [chartDom, setChartDom] = useState(null);
    const chartContainerRef = useRef(null);

    const option = {
       
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
        },
        xAxis: {
            type: 'category',
            min: 0,
            max: 29,
            axisLabel: {
                show: false // Hide the yAxis labels
            },
              axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.6)', // Set the color of the y-axis line to blue
                },
            },
            axisTick: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            min: -50000,
            max: 50000,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false // Hide the yAxis labels
              },

        },
        series: [

        ]

    };

    useEffect(() => {
        const chartDom = document.getElementById('chart-container');
        const myChart = echarts.init(chartDom);
        setChartDom(myChart);
        
        // Resize the chart when the window is resized
        const handleResize = () => {
            myChart.resize();
        };
    
        // Add the resize event listener
        window.addEventListener('resize', handleResize);

        const resizeObserver = new ResizeObserver(handleResize);

        resizeObserver.observe(chartContainerRef.current);
    
        // Return a cleanup function to remove the listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
            resizeObserver.disconnect();
        };
    }, []);
    

    // const [seconds, setSeconds] = useState(0);
    const [fakeData, setFakeData] = useState({axis:10000, gold:[], silver:[], silverMax:0, goldMax: 0, goldSum:0, silverSum: 0});
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setSeconds((prevSeconds) => (prevSeconds + 1) % 40);
    //     }, 1000);
    
    //     // Cleanup interval on component unmount
    //     return () => clearInterval(intervalId);
    //   }, []); 


      useEffect(() => {
        if(!websocketData){
          return;
        }
        if (websocketData.type === 'live') {
          // let chartData = websocketData.chartData;

          let thresholdValue = 0;
          if(websocketData.totalGold == 0 && websocketData.totalSilver == 0){
            thresholdValue = 0.1;
          }

          let chartData = websocketData.chartData.map(item => ({
            silver: item.silver + thresholdValue,
            gold: item.gold + thresholdValue,
          }));

          const silverMax = calculateMaxValue(chartData, "silver");
          const goldMax = calculateMaxValue(chartData, "gold");


          const MaxAxisValue = getNextExponentialValue(Math.max(silverMax, goldMax));
        
          const goldValues = chartData.map(item => -1 * item.gold);
          const silverValues = chartData.map(item => item.silver);

          
          // const goldSum = goldValues.reduce((sum, value) => sum + value, 0);
          // const silverSum = silverValues.reduce((sum, value) => sum + value, 0);

          setFakeData({ axis: MaxAxisValue, gold: goldValues, silver: silverValues, silverMax: silverMax, goldMax: goldMax, goldSum: websocketData.totalGold, silverSum: websocketData.totalSilver});
        } 
        else{
          // alert(websocketData.type);
          // let silverValue = Math.floor(Math.random() * 1000) + 1;
          // let goldValue = Math.floor(Math.random() * 1000) + 1;
          // setFakeData((prevFakeData) => {
          //   // Create new arrays to avoid mutation
          //   let NewSilverMax = Math.max(silverValue, prevFakeData.silverMax );
          //   let NewGoldMax = Math.max(goldValue, prevFakeData.goldMax );

          //   let MaxAxisValue = getNextExponentialValue(Math.max(NewSilverMax, NewGoldMax));
          //   const newSilver = [...prevFakeData.silver, silverValue];
          //   const newGold = [...prevFakeData.gold, - goldValue];
          //   return {
          //     ...prevFakeData,
          //     goldSum: prevFakeData.goldSum+goldValue,
          //     silverSum: prevFakeData.silverSum+silverValue,
          //     axis: MaxAxisValue,
          //     silverMax: NewSilverMax,
          //     goldMax: NewGoldMax,
          //     silver: newSilver,
          //     gold: newGold,
          //   };
          // });
        }
      }, [websocketData]);

    useEffect(() => {
        chartDom && chartDom.setOption({
            ...option,
            yAxis: {
                ...option.yAxis,
                min: -1 * fakeData.axis,
                max: fakeData.axis,
            },
            series: [
                {
                    name: 'Silver',
                    type: 'bar',
                    stack: 'Total',
                    data: fakeData.silver,
                    itemStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(254, 253, 253, 0.70)' },
                        { offset: 0.4, color: 'rgba(111, 108, 108, 0.70)' } 
                      ])
                    }
                  },
                {
                  name: 'Gold',
                  type: 'bar',
                  stack: 'Total',
                  label: {
                    position: 'left'
                  },
                  data: fakeData.gold,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0.0, color: 'rgba(211, 207, 207, 0.00)' },
                      { offset: 0.9797, color: '#FFD702' }
                    ])
                  }
                }
              ]
        });
        
    }, [fakeData, chartDom]);


    function calculateProgressWidth() {
        if (fakeData.goldSum === 0 && fakeData.silverSum === 0) {
          // Avoid division by zero
          return 50;
        }
      
        const ratio = (fakeData.silverSum / (fakeData.silverSum + fakeData.goldSum) ) * 100;
        return ratio.toFixed(2);
      }

    return (
        <div style={{height:"100%"}}  ref={chartContainerRef}>
            <div className="game-chart">
                <div class="images">
                    <img class="top-image" src="/assets/electra/silver-coin.png" alt="Top Image" />
                    <img class="bottom-image" src="/assets/electra/gold-coin.png" alt="Bottom Image" />
                </div>
                <div id="chart-container" style={{ width: "100%", height: "100%" }}></div>
            </div>
            <ProgressBar progressValue={calculateProgressWidth()} />
        </div>


  );
}



// export default LineChart;

// mapStateToProps function to connect the component to the Redux store
const mapStateToProps = (state) => ({
  websocketData: state.websocketReducer.websocketData,
});

export default connect(mapStateToProps)(LineChart);