import React, { useState, useEffect } from 'react';

const Topten = () => {
    const [allUsersGameHistory, setAllUsersGameHistory] = useState([]);
    const token = localStorage.getItem('token');

  

    useEffect(() => {
        fetch('http://192.168.29.85:3000/allusersgamehistory', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data && Array.isArray(data)) {
                setAllUsersGameHistory(data);
            }
        })
        .catch(error => {
            console.error('Error fetching all users game history:', error);
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
                                        <h3>Top 10 Winners</h3>
                                    </div>
                                    <div className="column"></div>
                                    <div className="column"></div>
                                    <div className="column">
                                        <h3> Total Winnings</h3>
                                    </div>
                                    <div className="column"></div>
                                    <div className="column"></div>
                                    <div className="column">
                                        <h3>Game</h3>
                                    </div>
                                    <div className="column"></div>
                                </div>
                                {allUsersGameHistory.map((record, index) => (
                                    <div key={record.userId} className="fl-item2">
                                        <div className="item flex">
                                            <div className="infor-item flex column1">
                                                <div>
                                                    <h3> {index + 1}. {record.username} </h3>
                                                </div>
                                            </div>
                                            <div className="column"></div>
                                            <div className="column"></div>
                                            <div className="column td5">
                                                <h3>{record.totalWin}</h3>
                                            </div>
                                            <div className="column"></div>
                                            <div className="column"></div>
                                            <div className="column">
                                                <h3> Bid and Win</h3>
                                            </div>
                                            <div className="column"></div>
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

export default Topten;
