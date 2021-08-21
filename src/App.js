import { Fragment } from 'react';
import Input from './UI/Input';
import Background from "./list.png";
import './App.css';

function App() {
  var sectionStyle = {
    height: "100vh",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(" + Background + ")",
    overflow: "hidden",
  };
  return (
    <Fragment>
      <div className="section" style={sectionStyle}>
        <Input />
      </div>
    </Fragment>
  );
}

export default App;
