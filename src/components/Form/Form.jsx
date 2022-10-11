import React, {useState, useEffect, useCallback } from 'react'
import './Form.css'

const Form = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physical')
 

  const onSendData = useCallback(() => {
      const data = {
        country,
        street,
        subject,
      }
      window.Telegram.WebApp.onSendData(JSON.stringify(data))
    }, [country, street, subject])

    useEffect(() => {
      window.Telegram.WebApp.onEvent('mainButtonClicked', onSendData)
    
      return () => {
        window.Telegram.WebApp.offEvent('mainButtonClicked', onSendData)
      }
    }, [onSendData])
    
  useEffect(() => {
    window.Telegram.WebApp.MainButton.setParams({
      text: 'Send data'
    })
  }, [])

  useEffect(() => {
    if (!street || !country) {
      window.Telegram.WebApp.MainButton.hide()
    } else {
      window.Telegram.WebApp.MainButton.show()
    }
  }, [])
  
  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }
  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }
  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

  return (
    <div className={'form'}>
      <h3>Enter your data</h3>
      <input 
        className={'input'} 
        type='text' 
        placeholder={'Country'} 
        value={country}
        onChange={onChangeCountry}
      />
      <input 
        className={'input'} 
        type='text' 
        placeholder={'Street'} 
        value={street}
        onChange={onChangeStreet}
      />
      <select 
        value={subject} 
        onChange={onChangeSubject} 
        className='select'
      >
        <option value={'physical'}>Individual</option>
        <option value={'legal'}>Legal entity</option>
      </select>
    </div>
  )
}

export default Form