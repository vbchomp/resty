import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './app.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const setParams = (requestParams) => {
    // toggling before loading status
    console.log('whatever');
    setRequestParams(requestParams);
  };

  useEffect(() => {
    setLoading(true);
    const callApi = async () => {
      // mock output
      // const data = requestParams.textArea;
      console.log('request', requestParams);
      const response = await axios({
        method: requestParams.method,
        url: requestParams.url,
        data: requestParams.textArea,
      });
      console.log('requestParams.url', requestParams.url);
            // console.log('response.data', response.data);
      setData(response.data);
      setLoading(false);
    };
    // this fixes the useEffect first run callAPI because url is not defined
    if (requestParams.url) {
      callApi();
    }
  }, [requestParams]);

  return (
    <>
      <Header title={'RESTy'} />
      {console.log('requestParams', requestParams)}
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={setParams} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
