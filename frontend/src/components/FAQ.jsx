import React, { useState } from 'react'
import { Add, Close } from '@mui/icons-material'; 

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

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="question">
        {questions.map((question, index) => (
          <span key={index}>
            <div onClick={() => handleClick(index)} className="hover:bg-gray-700 hover:cursor-pointer" >
              <h6>{question.ask}</h6>
              <i>{activeIndex !== index ? <Add /> : <Close />}</i>
            </div>
            <p style={{ display: activeIndex === index ? 'block' : 'none' }} >{question.answer}</p>
          </span>
        ))}
      </div>
    </>
  )
}
export default FAQ
