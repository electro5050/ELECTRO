import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import Button from 'react-bootstrap/Button';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PurchaseCoin  from './purchaseCoin';
import RedeemCoin  from './RedeemCoin';
import RedeemTrans  from './redeemTrans';

const containerStyle = {
  background: 'rgb(0, 0, 0)',
  height: '30vh',
  borderRadius: '0.6vw',
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const CoinManagement = ({}) => {

  const [selectedButton, setSelectedButton] = useState('buy');

  const handleButtonClick = (type) => {
    setSelectedButton(type);
  };

  const renderComponent = () => {
    switch (selectedButton) {
      case 'buy':
        return <PurchaseCoin handleButtonClick={handleButtonClick}  />;
      case 'sell':
        return <RedeemCoin handleButtonClick={handleButtonClick}  />;
      case 'sell-trasaction':
        return <RedeemTrans handleButtonClick={handleButtonClick}  />;
        
      default:
        return <PurchaseCoin handleButtonClick={handleButtonClick}  />;
    }
  };

  
  return (
    <div className="container" style={{background:"rgba(40, 40, 40, 0.90)", borderRadius: "1.2vw", height: "88vh",color: "white", padding:"2vw"}}>
    <div className='wallet-page'>
      <div className='d-flex'>
      <Button
        variant={`outline-primary control-btn font-4 ${selectedButton === 'buy' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('buy')}
      >
        Buy
      </Button>
      <Button
        variant={`outline-primary control-btn font-4 ml-10 ${selectedButton === 'sell' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('sell')}
      >
        Sell
      </Button>
      </div>


        {renderComponent()}

    </div>
    </div>
  );
};

export default CoinManagement;
