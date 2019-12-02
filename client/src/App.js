import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch('/api/welcome-msg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    });
    const data = await response.json();
    
    setStatusMessage(data.status);
    setTimeout(() => {
      setStatusMessage('');
      setName('')
    }, 5000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          <button type="submit">Save</button>
        </form>
        <p>{statusMessage}</p>
      </header>
    </div>
  );
}

export default App;
