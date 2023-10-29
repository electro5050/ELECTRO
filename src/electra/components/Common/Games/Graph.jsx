import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
 import './Graph.css';
import axios from 'axios';

function LineChart({data}) {

    const [chartDom, setChartDom] = useState(null);

    const option = {
       
        // tooltip: {
        //     trigger: 'axis'
        // },
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
            min: -1,
            max: 1,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false // Hide the yAxis labels
              },

        },
        series: [
            {
                name: 'Your Series Name',
                type: 'line',
                showSymbol: false,
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.6)',
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    //     offset: 0, color: 'red'
                    // }, {
                    //     offset: 1, color: 'green'
                    // }], false)
                },
                lineStyle: {
                    // Increase the line width
                    width: 2, // You can adjust this value to set the desired line width
                },

                // areaStyle: {
                //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //         {
                //             offset: 0,
                //             color: 'rgb(255, 0, 0)'
                //         },
                //         {
                //             offset: 1,
                //             color: 'rgb(0, 255, 0)'
                //         }
                //     ])
                // }
            }
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
    
        // Return a cleanup function to remove the listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    


    useEffect(() => {

        chartDom && chartDom.setOption({
            ...option,
            xAxis: {
                ...option.xAxis,
                data: data.map((_, i) => i),
            },
            series: [
                {
                    ...option.series[0],
                    data: data
                }
            ]
        });
        
    }, [data, chartDom]);


    return (
      <div className="game-chart">
          <div id="chart-container" style={{ width: "100%", height: "100%" }}></div>
      </div>
  );
}

export default LineChart;