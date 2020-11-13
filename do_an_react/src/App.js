import logo from './logo.svg';
import './App.css';

import Component1 from './Module/Component1';


function  test(){
  alert(123);
}

function App() {
  let abc = 'Chào các bạn';
  return (
    <aaaaa onClick={test} style={{
      color: '#ffc',
      background: '#000'
    }}>
      {abc} haha

      <Component1></Component1>
    </aaaaa>
  );
}

export default App;
