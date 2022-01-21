import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [ method, setMethod ] = useState('GET');
  const [ url, setUrl ] = useState('');
  const [ textArea, setTextArea ] = useState('');

  // submit handler for form
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      textArea
    };
    props.handleApiCall(formData);
  }

  const handleChange = e => {
    if (e.target.name === 'url') {
      setUrl(e.target.value);
    } 
    if (e.target.name === 'textArea') {
      setTextArea(e.target.value);
    }
  }  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>
            URL: 
          </span>
          <input onChange={handleChange} name='url' type='text' />
          <button type="submit">
            GO!
          </button>
        </label>
        <label className="methods">
          <span onClick={ () => setMethod('GET') } className= { method === 'GET' ? 'currentSelection' : 'selection' } >
            GET
            </span>
          <span onClick={ () => setMethod('POST') } className= { method === 'POST' ? 'currentSelection' : 'selection' } >
            POST
            </span>
          <span onClick={ () => setMethod('PUT') } className= { method === 'PUT' ? 'currentSelection' : 'selection' } >
            PUT
          </span>
          <span onClick={ () => setMethod('DELETE') } className= { method === 'DELETE' ? 'currentSelection' : 'selection' } >DELETE</span>
        </label>
        <textarea onChange={handleChange} name='textArea' />
      </form>
    </>
  );
}

export default Form;
