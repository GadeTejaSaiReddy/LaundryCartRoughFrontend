import React from 'react'
import tick from '../logo/tickImage.svg'
import './SucessfullModal.css'
import { useNavigate } from 'react-router-dom'


function SucessfullModal() {
    const navigate = useNavigate()
  return (
    <>
        <div  className='GSucessFullModal' > 
            <div className='GContainerSucess'>
                <div className='GimageSucessfullImage'>
                    <img src={tick}/>
                </div>
                <div >
                    <h4>Your order is successfully Placed</h4>
                </div>
                <div>
                    <p>You can view the details in the "Orders" section.</p>
                </div>
                <div>
                    <button onClick={()=>navigate('/order')} className='GbuttonforOrder'>Jump to orders section</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SucessfullModal
