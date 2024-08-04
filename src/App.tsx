import Button from './components/Button';
import Alert from './components/Alert';
import './App.css'
import { useState } from 'react';


function App()
{
  const [alertVisible, setAlertVisibility] = useState( false );
  return (
  <div className="button-container">
    { alertVisible && <Alert onClose={()=> setAlertVisibility(false)}> Warning </Alert> }
      <div className="classToTheFirstElement">
        <Button  color="danger" onClick={() => setAlertVisibility(true)}> 1 </Button>
        <Button  color="danger" onClick={() => setAlertVisibility(true)}> 2 </Button>
        <Button  color="danger" onClick={() => setAlertVisibility(true)}> 3 </Button>
        <Button  color="danger" onClick={() => setAlertVisibility(true)}> 4 </Button>
        <Button  color="danger" onClick={() => setAlertVisibility(true)}> 5 </Button>
        <Button  color="danger" onClick={() => setAlertVisibility(true)}> 6 </Button>
        <Button  color="danger" onClick={() => setAlertVisibility(true)}> 7 </Button>
      </div>
  </div>
  );
}

export default App;