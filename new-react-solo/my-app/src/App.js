import React from 'react';
import logo from './logo.svg';
import Form from './components/form';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Form/>
    </div>
  );
}
}

export default App;
