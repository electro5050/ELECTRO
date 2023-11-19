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
                <div className='method'>
                <h2 >“ How to earn ?” <br></br>Follow these simple steps</h2>

                </div>
               
                
            </div>
            <div className='innerbox'>
                    <div className='innerbox1'>
                        <div className='pic-a'>
                        <img src={Step1 }></img>
                        </div>
                        

                    </div>
                    

                    <div className='innerbox2'>
                        <div className='pic-b'>
                        <img src={Step2  }></img>
                        </div>
                        

                    </div>
                   

                    <div className='innerbox3'>
                        <div className='pic-b'>
                        <img src={Steps5} alt="" />
                        </div>
                        

                    </div>
                    

                    <div className='innerbox4'>
                        <div className='pic-c'>
                        <img src={Step3  }></img>
                        </div>
                        

                    </div>
                   

                    <div className='innerbox5'>
                        <div className='pic-d'>
                        <img src={Step4 }></img>
                        </div>
                        

                    </div>
                   
                    
                    
                        
                    
                </div>
        </div>

    </div>
   </div>
  )
}

export default Steps