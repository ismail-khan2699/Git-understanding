import React from 'react'

function TalkForm() {
  return (
    <div className=' TalkFormC' style={{width:'100%', fontFamily:'Montserrat, sans-serif'}} >
      <div className='lg:flex lg:justify-between  w-full py-10'>
        <div className=' lg:w-5/12 p-5 md:pl-10 lg:pl-20'>
          <p className=' p-0 m-0 text-black'>Let’s talk about your project</p>
          <h3 className=' text-sm text-gray-600 pt-4 w-2/3'>Do you have a project in mind, that you feel our approach would work well for? <br /><br /> We’re always happy to discuss your project with you and put together a free proposal.</h3>
        </div>
        <div className='  my-3  w-full sm:p-5 md:pl-10 sm:w-11/12 md:w-4/6 lg:w-7/12 max-lg:items-end'>
          <div className=' bg-white sm:rounded-xl lg:mr-10 p-5 lg:p-20' style={{height:'700px'}}>
            <h2 className=' text-black font-semibold text-lg'> Just fill out the form below  to get started.</h2>
            <form action="Message" className='flex flex-col mt-3'>
             <input type="text" className='w-full border-2 h-12 rounded-lg p-2 my-2' placeholder="Name"/>
             <input type="email" className='w-full border-2 h-12 rounded-lg p-2 my-2' placeholder="Email"/>
             <input type="text" className='w-full border-2 h-12 rounded-lg p-2 my-2' placeholder="Company"/>
             <input type="tel" className='w-full border-2 h-12 rounded-lg p-2 my-2' placeholder="Phone No."/>
             <div className="flex items-center w-full border-2 h-12 rounded-lg p-2 my-2 relative">
  <label htmlFor="brief" className="text-sm text-gray-500" style={{ width: '74%' }}>Send us your brief:</label>
  <input type="file" id="brief" style={{ width: '30%', color: 'transparent' }} />
</div>
             <textarea className='w-full border-2 h-24 rounded-lg p-2 my-2' placeholder="Message"></textarea>
             <div className="flex items-center">
              <input type="checkbox" id="agreeCheckbox" className="m-2"/>
              <label htmlFor="agreeCheckbox" className=' text-black text-sm'>I agree to have my information stored in <span className=' text-orange-500'>Privacy Policy</span>.</label>
             </div>
             <button type="submit" className="w-full p-2 rounded-lg my-4" style={{ background: 'linear-gradient(103.22deg, #5B53F9 0%, #AC71D6 40.58%, #FF8E57 101.45%)', color: 'white' }}>Submit</button>
</form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TalkForm