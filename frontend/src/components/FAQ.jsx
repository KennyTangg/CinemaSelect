import React, { useState } from 'react'
import { Add, Close } from '@mui/icons-material'; 
import { useLocation } from 'react-router-dom';

const questions = [{
  ask:"What is Cinema Select?",
  answer:"Cinema Select lets you choose your favorite theater and get special deals or reserved seating to make your movie experience even better."
},{
  ask:"Which cinemas are you partners with?",
  answer:"We work with many theaters, like CGV, XXI, cinepolis, and more. You can see all available theaters when you book your tickets online."
},{
  ask:"Is it cheaper to buy tickets using Cinema Select?",
  answer:"Yes, sometimes we offer special discounts for booking online! Plus, you can skip the lines at the theater."
},{
  ask:"What payment methods do you accept?",
  answer:"We accept credit/debit cards, PayPal, and other online payment methods."
},{
  ask:"Can I buy tickets for a group of people?",
  answer:"Yes! You can buy tickets for your group and pick seats together when you book."
}]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname == '/';

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <>
    {isHomePage 
    ? (<>
        <h1>Frequently Asked Questions</h1>
        <div className="question select-none">
          {questions.map((question, index) => (
            <span>
              <div onClick={() => handleClick(index)} >
                <h6>{question.ask}</h6>
                <i>{activeIndex !== index ? <Add /> : <Close />}</i>
              </div>
              <p className={`duration-500 ${activeIndex === index 
              ? 'animate-in fade-in slide-in-from-top-3 ' : 'animate-out fade-out slide-out-to-top-3 '}`}
              style={{ display: activeIndex === index ? 'block' : 'none' }} >{question.answer}</p>
            </span>
          ))}
        </div> 
      </>)
    : ( <div className='space-y-8'>
          <div className='space-y-2'>
              <h1 className='text-2xl font-semibold'>Frequently Asked Questions</h1>
              <hr className='text-gray-700 mb-4' />
              <p className='text-gray-400'>
                  Cinema Select is your premier destination for hassle-free movie ticket booking. 
                  Founded in 2023, we've quickly become one of Indonesia's leading movie ticketing platforms, 
                  serving millions of movie enthusiasts across the country.
              </p>
          </div>
          {questions.map((question) => (
            <div className='space-y-2'>
                <h2 className='text-xl'>• {question.ask}</h2>
                <p className='text-gray-400'>{question.answer}</p>
            </div>
          ))}
      </div>)}
    </>
  )
}
export default FAQ
