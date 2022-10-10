import React, {useEffect} from 'react'
import './App.css';


function App() {
  const { onToggleButton, tg } = useTelegram()
  
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
     work
     <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
