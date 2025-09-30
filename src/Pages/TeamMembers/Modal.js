import React, { useState } from 'react';
import './modal.css'
export default function Modal({ defaultValue, onSubmit, closeModal }) {
  const [formState, setFormState] = useState(defaultValue); 

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // cegah reload form
    onSubmit(formState);
    closeModal();
  };
  return (
    <div className='modalContainer'>
        <div className='modal'>
        <h4>Edit Forms</h4>
        <form>
            <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input name='firstName' value={formState.firstName} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input name='lastName'value={formState.lastName} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='age'>Age</label>
                <input name='age' value={formState.age} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
                Submit
            </button>
        </form>
        </div>
    </div>
  )
}
