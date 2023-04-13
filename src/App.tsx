import { useState } from 'react';
import './Navbar/modal-style.css';
import './App.css';
import { Navbar } from './Navbar/Components/Navbar';
import { UserContext } from './context/UserContext';
import { TUser } from './Navbar/types/TUser';
import { visitor } from './Navbar/types/TVisitor';
import { LoginForm } from './Navbar/Components/login';
import { RegisterForm } from './Navbar/Components/Register';

function App() {
  const [user, setUser] = useState<TUser>(visitor);



  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}></UserContext.Provider>

      <header className="App-header">
        <Navbar />
        <div>Hello World</div>
      </header>

      <main className="container-fluid">
        <LoginForm />
        <RegisterForm />
      </main>

    </div>
  );
}




export default App;
