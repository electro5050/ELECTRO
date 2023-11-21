import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
 import './Graph.css';
import axios from 'common/electra_axios';

function LineChart({data, gameState, setGameState, authError, setAuthError,gameId}) {

    const [showPopup, setShowPopup] = useState(false);
    const [buttonType, setButtonType] = useState("");
    const [textFieldData, setTextFieldData] = useState("");
    const [chartDom, setChartDom] = useState(null);

    const [errorPopup, setErrorPopup] = useState(false);
    // const [authError, setAuthError] = useState(false);

    const handleButtonClick = (type) => {
        setButtonType(type);
        setShowPopup(true);
    };

    const handleSwitchRoom = () => {
        const userIdFromLocalStorage = localStorage.getItem('userId');
        axios.post('http://192.168.29.85:3000/switch', {
            userId: userIdFromLocalStorage
        })
        .then(response => {
            console.log("Switch room success:", response.data); 
        })
        .catch(error => {
            console.error("Error switching room:", error);
        });
    };
    

    const option = {
       
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '5%',
            right: '15%',
            bottom: '10%'
        },
        xAxis: {
            type: 'category',
            min: 0,
            max: 30
        },
        yAxis: {
            type: 'value',
            min: -1,
            max: 1,
            splitLine: {
                show: false
            }
        },
        series: [
            {
                name: 'Your Series Name',
                type: 'line',
                itemStyle: {
                    width: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0, color: 'red'
                    }, {
                        offset: 1, color: 'green'
                    }], false)
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 0, 0)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(0, 255, 0)'
                        }
                    ])
                }
            }
        ]
    };

    useEffect(() => {
        const chartDom = document.getElementById('main');
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
        if (gameState.gameEnded) {
            setGameState({
                ...gameState,
                activeGameButton: null
            });
        } else {
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
        }
    }, [data, gameState.gameEnded]);

   

    const sendDataToAPI = () => {
        axios.post('http://192.168.29.85:3000/bid', {
            coinCount: textFieldData,
            buttonType: buttonType,
            gameId: gameState.gameId
        })
        .then(response => {
            setGameState({
                ...gameState,
                activeGameButton: buttonType
            });
            console.log("Data sent successfully:", response.data);
        })
        .catch(error => {
            console.error("Error sending data:", error);
            if (error.response && error.response.status === 401) {
                console.log('Authentication error. Please login again.');
                setAuthError(true);
            }
        });

        setButtonType("");
        setShowPopup(false);
        console.log(`Sending data: coinCount = ${textFieldData}, buttonType = ${buttonType}`);

    };

    return (
      <div className="chart-wrapper">
          <div id="main" style={{ width: 1400, height: 300 }}></div>
          
          {gameState.gameEnded && <div className="game-ended-message">{gameState.endGameMessage}</div>}
          {authError && <div className="auth-error-message">Authentication error. Please login again.</div>}

          <button 
              onClick={() => handleButtonClick("Red")}
              className="red-btn chart-button chart-button-top"
              disabled={gameState.activeGameButton === "Green"}
          >
              Bid on red
          </button>

          <button 
              onClick={() => handleButtonClick("Green")}
              className="green-btn chart-button chart-button-bottom"
              disabled={gameState.activeGameButton === "Red"}
          >
              Bid on green
          </button>

          {data.length>24 && !gameState.gameEnded && gameState.activeGameButton && (<button onClick={handleSwitchRoom} className="switch-room-btn">
                Switch Room
          </button>)
}

          {showPopup && (
              <div className="popup">
                  <input type="text" value={textFieldData} onChange={(e) => setTextFieldData(e.target.value)} placeholder="Enter data" />
                  <button onClick={sendDataToAPI}>Send</button>
                  <button onClick={() => {
                      setButtonType(null);
                      setShowPopup(false);
                  }}>
                      Cancel
                  </button>
              </div>
          )}

          {errorPopup && (
              <div className="error-popup">
                  You can't bid on both rooms in one game!
                  <button onClick={() => setErrorPopup(false)}>Close</button>
              </div>
          )}
      </div>
  );
}

export default LineChart;