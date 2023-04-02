
import './App.css';

import Profile from './Profile/Profile';
function App() {
  
  const lastName="yazidi"
  const profession="Pidiatre"
  
  return (
    <div className="App">
    
      <Profile  lastName={lastName} profession={profession} >
      
      <img src='./Profile1.png' alt='profile' width={'200px'} height={'200px'}/>
      
      
      </Profile>
      
    </div>
  );
}

export default App;
