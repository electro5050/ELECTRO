import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import Button from 'react-bootstrap/Button';
import { faCheck, faPlusCircle, faMinusCircle, faPlus, faMinus, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const containerStyle = {
  background: 'rgb(0, 0, 0)',
  height: '30vh',
  borderRadius: '0.6vw',
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const RedeemCoin = ({handleButtonClick, selectedButton}) => {


  return (
    <div>


    <div className='d-flex' style={{marginTop:"5vh", alignItems:"flex-end"}}>
      <div style={{flex:"1"}}>
        <span className='font-10' style={{color:"white", fontWeight:800}}>
          REDEEM COINS
        </span>
      </div>

      <div className='font-6' style={{color:"rgba(221, 187, 221, 0.74)", flex:"1"}}>
        <span className='font-6' style={{color:"white", fontWeight:600}}>
          BUY&nbsp;
        </span>
        or&nbsp;
        <span className='font-6' style={{color:"white", fontWeight:600}}>
          SELL&nbsp;
        </span>
         coins in three easy Steps
      </div>

    </div>

    <div className='d-flex' style={{marginTop:"5vh", alignItems:"flex-start", color:"#DBDBDB"}}>
      <div style={{flex:"1"}}>
       <div className='font-6'>
       <div className="wallet-money font-6" style={{padding:"calc(0.7vw + 0.7vh + 7px)", marginBottom:'10px'}}>
            
                  $ 2,300.0000

            </div>
            YOUR CURRENT BALANCE
        </div>

        <div className='d-flex v-cen' style={{marginTop:"2vh"}}>
            <span className='font-4'> transfer rate: &nbsp;
              </span>
              <span className='font-8'>
              &nbsp;1&nbsp; 
              </span>

              <img
                    className="coin-image"
                    id="logo_header"
                    src={"/assets/electra/gold-coin.png"}
                    srcSet={"/assets/electra/gold-coin.png"}
                    alt="electra"
                    style={{width:"calc(0.8vw + 0.8vh + 8px"}}
                />
                  <span className='font-8'>
              &nbsp;= 1 $&nbsp; 
              </span>
        </div>

        <div className='font-5' style={{marginTop:"2vh"}}>
            Select the amount of coins you want to sell
        </div>


        <div style={{marginTop:"1vh"}} className="d-flex v-cen">
        
     
          <div style={{backgroundColor:"trasparant", borderRadius:"50%", height:"2vw", width:'2vw', border:"1px solid #DBDBDB"}} className='d-center v-cen' >
          <FontAwesomeIcon icon={faPlus} />
            </div>

            <div>
            <div className="redeem-money" style={{    marginLeft: "20px", marginRight: "20px"}}>
              
              <img
                    className="coin-image"
                    id="logo_header"
                    src={"/assets/electra/gold-coin.png"}
                    srcSet={"/assets/electra/gold-coin.png"}
                    alt="electra"
                />

                <hr className="custom-horizontal-line" />
                <span className='wallet-value font-6 ml-10 d-flex v-cen'>
              
                  $

                  <span className="font-6 ml-10" >
                    200
                  </span>


                </span>
            </div>
            </div>


            <div style={{backgroundColor:"trasparant", borderRadius:"50%", height:"2vw", width:'2vw', border:"1px solid #DBDBDB"}} className='d-center v-cen' >
          <FontAwesomeIcon icon={faMinus} />
            </div>

        </div>


    <div className='transactiondiv'>
    <Button
        variant={`outline-primary checkout-btn continue font-4 mt-10 ${selectedButton === 'buy' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('sell-trasaction')}
      >
        Continue with the Transaction
      </Button>

      <span className='font-4 mt-10' style={{color:'#DBDBDB'}}>
      <FontAwesomeIcon icon={faLock} style={{color:'#DBDBDB'}}/> Secured with I28- bit subscription
      </span>
    </div>


      </div>

      <div className='font-6' style={{color:"rgba(221, 187, 221, 0.74)", flex:"1"}}>
        <div className='d-flex v-cen'>
          <div>
            <div style={{backgroundColor:"rgba(232, 137, 30, 1)", borderRadius:"50%", height:"3vw", width:'3vw', opacity: "0.6"}} className='d-center v-cen'>
            <FontAwesomeIcon icon={faCheck} className='white'/>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="36" fill="#E8891E" fill-opacity="0.6"/>
              </svg> */}

            </div>
          </div>

            <div className='ml-10'>
                <div className='font-5 white'>SELECT BUY  OR SELL OPTION
                </div>
                <div className='font-4 white mt-10'>If the user wants to purchase coins, they will click on the "BUY" button. This will lead them to a section where they can specify the details of their purchase
                </div>

            </div>
        </div>

        <div className='d-flex v-cen' style={{marginTop:"4vh"}}>
          <div>
          <div style={{backgroundColor:"#E8891E", borderRadius:"50%", height:"3vw", width:'3vw'}} className='d-center v-cen'>
            <FontAwesomeIcon icon={faCheck} className='white'/>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="36" fill="#E8891E" fill-opacity="0.6"/>
              </svg> */}

            </div>
          </div>

            <div className='ml-10'>
                <div className='font-5 white'>FILL THE COINS FIELD
                </div>
                <div className='font-4 white mt-10'>A dropdown menu or a list of available coins that the user can choose from. the amount or quantity of the chosen coin they want to buy selects how they will pay for the coins, </div>

            </div>
        </div>


        <div className='d-flex v-cen' style={{marginTop:"4vh"}}>
          <div>
            <div style={{backgroundColor:"rgba(232, 137, 30, 1)", borderRadius:"50%", height:"3vw", width:'3vw', opacity: "0.3"}} className='d-center v-cen'>
            <FontAwesomeIcon icon={faCheck} className='white'/>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="36" fill="#E8891E" fill-opacity="0.6"/>
              </svg> */}

            </div>
          </div>

            <div className='ml-10'>
                <div className='font-5 white'>SELECT CONTINUE WITH THE TRANSACTION
                </div>
                <div className='font-4 white mt-10'>After filling out the necessary information, the user will click on the "CONTINUE" button. This will lead them to a confirmation page where they can review the details of the transaction     </div>

            </div>
        </div>
        
      </div>

    </div>


    </div>
  );
};

export default RedeemCoin;
