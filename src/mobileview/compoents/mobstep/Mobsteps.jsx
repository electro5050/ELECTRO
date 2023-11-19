import React from 'react'
import './mobsteps.css'
import Step1 from '../../../mobileview/assets/steps/a.png'
import Step2 from '../../../mobileview/assets/steps/b.png'
import Step3 from '../../../mobileview/assets/steps/c.png'
import Step4 from '../../../mobileview/assets/steps/d.png'
import Steps5 from '../../../mobileview/assets/steps/e.png'
function Mobsteps() {
  return (
    <div className='mob-step-container'>
     <div className='mob-mainbox-container'>
        <div className='mob-mainbox'>
            <div className='mob-texts'>
                <div className='mob-method'>
                <h2 className='mob-method' >“ How to earn ?” <br></br>Follow these simple steps</h2>

                </div>
               
                
            </div>
            <div className='mob-innerbox'>
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

export default Mobsteps
