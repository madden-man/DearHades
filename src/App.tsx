import { Helmet } from 'react-helmet';

import { Header } from './components/Header';
import { Intro } from './Intro';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Intro />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </Helmet>
    </div>
  );
}

export default App;
