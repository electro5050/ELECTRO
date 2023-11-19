import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/box-item/img3rank.png'


const Ranking = ({ rankingData }) => {
    const [visible, setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };

    return (
        <div>
            <section className="tf-section tf-rank">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-ranking">
                                <div className="flex th-title">
                                    <div className="column1">
                                        <h3>USER</h3>
                                    </div>
                                    <div className="column">
                                    <h3>BID AMOUNT</h3>
                                    </div>
                                    <div className="column">
                                        <h3></h3>
                                    </div>
                                    <div className="column">
                                    </div>
                                    <div className="column">
                                    </div>
                                    <div className="column">
                                    <h3>PROFIT</h3>
                                    </div>
                                    <div className="column">
                                        <h3></h3>
                                    </div>
                                </div>
                                {
                                    rankingData.slice(0, visible).map((player, index) => (
                                        <div key={player.userId} className="fl-item2">
                                            <div className="item flex">
                                                <div className="infor-item flex column1">
                                                    <div className="media">
                                                        {/* You can retain the image if it's relevant */}
                                                        <img src={img1} alt="Axies" />
                                                    </div>
                                                    <div>
                                                      <h3> User ID: {player.userId}</h3> 
                                                    </div>
                                                </div>
                                                <div className="column td3">
                                                  <h3> {player.bidAmount}</h3> 
                                                </div>
                                                <div className="column">
                                                </div>
                                                <div className="column">
                                                </div>
                                                <div className="column td5" color='green' >
                                                   <h3>{player.winningBonus}</h3> 
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    visible < rankingData.length &&
                                    <div className="col-md-12 wrap-inner load-more text-center">
                                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ranking;
