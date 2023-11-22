import React, { useState, useEffect } from 'react';
import config from 'common/constants';

const Portfolio = () => {
  const [gameHistory, setGameHistory] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
      fetch(config.gameApiUrl+ '/usergamehistory', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data && Array.isArray(data)) {
              setGameHistory(data);
          }
      })
      .catch(error => {
          console.error('Error fetching user game history:', error);
      });
  }, []);

  return (
    <div>
      <section className="tf-section tf-rank">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="table-ranking">
                <div className="flex th-title">
                  <div className="column1">
                    <h3>Your game history</h3>
                  </div>
                  <div className="column">
                    <h3>Bid Amount</h3>
                  </div>
                  <div className="column"></div>
                  <div className="column"></div>
                  <div className="column">
                    <h3>Win</h3>
                  </div>
                  <div className="column">
                    <h3>Loose</h3>
                  </div>
                </div>
                {gameHistory.map((record, index) => (
                  <div key={record.userId} className="fl-item2">
                    <div className="item flex">
                      <div className="infor-item flex column1">
                        <div>
                          <h3> User: {record.username}</h3> 
                        </div>
                      </div>
                      <div className="column td3">
                        
                      </div>
                      <div className="column td3">
                        <h3> {record.bidAmount}</h3> 
                      </div>
                      <div className="column"></div>
                      <div className="column"></div>
                      <div className="column td5">
                        <h3>{record.win}</h3> 
                      </div>
                      
                      <div className="column">
                        <h3>{record.loss}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
