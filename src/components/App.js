import React from 'react';
import Main from './Main';
import Zoom from 'react-reveal/Zoom';

function App() {

  return (
    <div className="App">
      <Zoom>
        <section>
          <Main />
        </section>
      </Zoom>
    </div>
  );
}

export default App;
