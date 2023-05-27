// App.js
import './App.css';
import TopNavBar from './TopNavBar';
import Link1 from './Link1';
import MyComponent from './Products/MyComponent'; // Import the new MyComponent containing add1 and add2
import MyComponents2 from './Products/MyComponents2';
import MyComponents3 from './Products/MyComponents3';
import MyComponents4 from './Products/MyComponents4';
import MyComponents5 from './Products/MyComponents5';
import MyComponents6 from './Products/MyComponents6';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <TopNavBar />
      <Link1 />
      <MyComponent />
       <MyComponents2 />
       <MyComponents6/> 
       <MyComponents3/>
    
       <MyComponents4/>
       <MyComponents5/>
    </div>
  );
}

export default App;
