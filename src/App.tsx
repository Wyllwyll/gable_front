import { useState } from 'react';
import './Navbar/modal-style.css';
import './App.css';
import './index.css';
import { Navbar } from './Navbar/Components/Navbar';
import { UserContext } from './context/UserContext';
import { TUser } from './Navbar/types/TUser';
import { DEFAULT_USER } from './constant/TVisitor';
import { LoginForm } from './Navbar/Components/login';
import { RegisterForm } from './Navbar/Components/Register';
import ConfigurateurGauche from './Configurateur/Components/Configurateur_gauche';
import ConfigurateurDroit from './Configurateur/Components/configurateur_droit';
import ModalChoix from './Configurateur/Components/modal_choix';

function App() {
  const [user, setUser] = useState<TUser>(DEFAULT_USER);
  const [page, setPage] = useState<
    'Configurateur'
  >('Configurateur');



  return (
    <div className="App row mx-0">
      <UserContext.Provider value={{ user, setUser }}>
        <div className='col color-green '>

          <header className="App-header">
            <Navbar setPage={setPage} page={page} />

          </header>
          <main className="">

            <LoginForm />
            <RegisterForm />
            <ConfigurateurGauche />

          </main>
        </div>

        <div className='col color-yellow'>
          <div className="pc-backgound">
            <ConfigurateurDroit />
          </div>

        </div>
      </UserContext.Provider>
    </div>

  );
}




export default App;
