import React from 'react';
import Layout from '@theme/Layout';

function Slides() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Slides will be uploaded here after every Studio Session.
        </p>
        {/* <a href="/slides/test.pptx" download>test</a> */}
      </div>
    </Layout>
  );
}

export default Slides;
