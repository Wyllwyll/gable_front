import { useState } from 'react';
import './Navbar/modal-style.css';
import './App.css';
import { Navbar } from './Navbar/Components/Navbar';
import { UserContext } from './context/UserContext';
import { TUser } from './Navbar/types/TUser';
import { DEFAULT_USER } from './constant/TVisitor';
import { LoginForm } from './Navbar/Components/login';
import { RegisterForm } from './Navbar/Components/Register';

function App() {
  const [user, setUser] = useState<TUser>(DEFAULT_USER);
  const [page, setPage] = useState<
    'Configurateur'
  >('Configurateur');



  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>

        <header className="App-header">
          <Navbar setPage={setPage} page={page} />

        </header>

        <main className="container-fluid">
          <LoginForm />
          <RegisterForm />
          <div>Hello World</div>
        </main>
      </UserContext.Provider>

    </div>
  );
}




export default App;
