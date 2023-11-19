import React from 'react'
import './Steps.css'
import Step1 from '../../assets/images/steps/a.png'
import Step2 from '../../assets/images/steps/b.png'
import Step3 from '../../assets/images/steps/d.png'
import Step4 from '../../assets/images/steps/e.png'
import Steps5 from '../../assets/images/steps/c.png'
function Steps() {
  return (
   <div className='grandient03'>
     <div className='mainbox-container'>
        <div className='mainbox'>
            <div className='texts'>
                <h2 className='method'>“ How to earn ?” </h2>
                <h2 classname='method2'>Follow these simple steps</h2>
                <div className='innerbox'>
                    <div className='innerbox1'>
                        <div className='pic-a'>
                        <img src={Step1 }></img>
                        </div>
                        

                    </div>
                    <p className='outer1'>signup</p>

                    <div className='innerbox2'>
                        <div className='pic-b'>
                        <img src={Step2  }></img>
                        </div>
                        

                    </div>
                    <p className='outer2'>buy coins</p>

                    <div className='innerbox3'>
                        <div className='pic-b'>
                        <img src={Steps5} alt="" />
                        </div>
                        

                    </div>
                    <p className='outer3'>participate</p>

                    <div className='innerbox4'>
                        <div className='pic-c'>
                        <img src={Step3  }></img>
                        </div>
                        

                    </div>
                    <p className='outer4'>bid and win</p>

                    <div className='innerbox5'>
                        <div className='pic-d'>
                        <img src={Step4 }></img>
                        </div>
                        

                    </div>
                    <p className='outer5'>redeem coins</p>
                    
                    
                        
                    
                </div>
                

            </div>
        </div>

    </div>
   </div>
  )
}

export default Steps