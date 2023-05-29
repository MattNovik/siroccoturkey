import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { data } from './data/data';

function App() {
  const [langType, setLangType] = useState('srp');
  const [dataLang, setDataLang] = useState(data[langType]);

  const handleLangChanger = (value) => {
    setLangType(value);
    setDataLang(data[value]);
    console.log(data[value]);
  };
  return (
    <div className="App">
      <Header
        langType={langType}
        handleLangChanger={handleLangChanger}
        data={dataLang}
      />
      <Main data={dataLang} />
      <Footer data={dataLang} />
    </div>
  );
}

export default App;
