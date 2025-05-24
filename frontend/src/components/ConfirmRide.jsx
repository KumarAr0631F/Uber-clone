import React from 'react'

const ConfirmRide = (props) => {
return (
    <div>
            <div onClick={() => props.setConfirmRidePanel(false)} className="w-full flex justify-center mb-3">
                <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>
            <div className='flex gap-3 justify-between flex-col items-center'>
                    <img 
            className='h-20 '
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />
          <div className='w-full'>
            <div className='flex items-center gap-5 p-3 border-b-2 border-b-gray-400'>
                <i className="text-lg ri-map-pin-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm text-gray-600 '>kankariya Talab, Ahemdabad</p>
                </div>
            </div>

            <div className='flex items-center gap-5 p-3 border-b-2 border-b-gray-400'>
                <i className="text-lg ri-square-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>Third Wave Coffee</h3>
                    <p className='text-sm text-gray-600 '>17th Cross Road, PWD Quaters, 1st Sector, HSR Layout, Ahemdabad</p>
                </div>
            </div>

            <div className='flex items-center gap-5 p-3'>
                <i className="text-lg ri-cash-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>₹193.20</h3>
                    <p className='text-sm text-gray-600 '>Cash</p>
                </div>
            </div>
            
          </div>
          <button onClick={() =>{
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }} className='w-full bg-black text-white p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide