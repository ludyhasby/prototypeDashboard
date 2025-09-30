import React, { useState } from 'react';
import './modal.css'

export default function Modal({ onSubmit }) {
  const [formState, setFormState] = useState({ password: "" });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState.password); // kirim password ke parent
  };

  return (
    <div className='modalContainer'>
      <div className='modal'>
        <h4>Password Forms</h4>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              name='password'
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
