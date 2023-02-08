import React from 'react'
import Radio from '@mui/material/Radio';

const Connect = () => {


     
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
      <div className='flex justify-center m-32'>
        <div className='border w-[739px] h-[589px] rounded-[8px]'>
          <div className='md:px-[50px]'>

            <div>
              <h1 className='not-italic font-mulish font-semibold  text-[32px] leading-[40px] text-center mt-[55px] mb-[28px] text-[#000000]'>Connect as a founder or intern </h1>
            </div>

            <div className='flex gap-[18px] justify-center items-center mb-[47px]'>
              {/* Founder */}
              <div className='border rounded-[8px] w-[311px] h-[248px] cursor-pointer'>
                <div className='bg-[#ACB4B9] w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]'>
                  <img className='h-[50px] m-[45px]' src="/icons8-alexander-hamilton-50 1.png" alt="" />
                </div>

                <div className='flex flex-col not-italic font-mulish p-3'>
                  <h1 className='font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]'>Founder</h1>
                  <p className='font-medium text-[16px] leading-[20px] text-[#000000]'>Looking to Employ</p>
                </div>

                <div>
                  {/* Radio button */}
                  <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                  />
                </div>
              </div>

              {/* Interns */}
              <div className='border rounded-[8px] w-[311px] h-[248px] cursor-pointer'>
                <div className='bg-[#ACB4B9] w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]'>
                  <img className='h-[50px] m-[45px]' src="/icons8-goal-oriented-focus-50 1.png" alt="" />
                </div>

                <div className='flex flex-col not-italic font-mulish p-3'>
                  <h1 className='font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]'>Interns</h1>
                  <p className='font-medium text-[16px] leading-[20px] text-[#000000]'>Looking to be employed</p>
                </div>

                <div>
                  {/* Radio button */}
                </div>
              </div>
            </div>

            {/* Sign up button */}
            <div className='flex justify-center '>
              <button className='w-[461px] h-[55px] bg-[#AEAEAE] font-mulish font-semibold text-[24px] leading-[30px] text-[#FFFFFF] mb-[11px]'>Sign Up</button>
            </div>

            <div className='text-center font-normal text-[16px] leading-[20px] text-[#000000]'>
              <h1>Already have an account? <span className='font-semibold'>Log In</span></h1>
            </div>

          </div>
        </div>
      </div>
    )
  }

  export default Connect