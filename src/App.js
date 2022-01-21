import React, { useState } from 'react';

import './app.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';

// DONE: change class to function
function App() {
  
  // DONE: create state for data, requestParams
  const [ data, setData ] = useState(null);
  const [ requestParams, setRequestParams ] = useState({});
  // TODO: create boolean loading state
  const [ loading, setLoading] = useState(false);
  // DONE: get rid of constructor

  // DONE: toggle before and after loading status
  // DONE: turn into function
  const callApi = async (requestParams) => {
    // toggling before loading status
    setLoading(true);
    // mock output
    await setTimeout(() => {
      const data = {
        headers: { ContentType: 'text/xml' },
        count: 2,
        results: [
          {name: 'fake thing 1', url: 'http://fakethings.com/1'},
          {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        ]
      };
      // DONE: update data
      // DONE: update requestParams
      setData(data);
      // toggling after loading status
      setLoading(false);
    }, 1000)
    setRequestParams(requestParams);
  }

  // DONE: change JSX
  return (
    <>
      <Header title={"RESTy"} />
      {console.log('requestParams', requestParams)}
      <div>
        Request Method: {requestParams.method}
      </div>
      <div>
        URL: {requestParams.url}
      </div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
