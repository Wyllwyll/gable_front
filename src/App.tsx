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
import { Tcomposants } from './Configurateur/Components/tipage/Tcomposants';
import { selectionsContext } from './context/SelectionContext';
import logoGable from '../public/upload/Logo2.svg'

function App() {
  const [user, setUser] = useState<TUser>(DEFAULT_USER);
  const [page, setPage] = useState<
    'Configurateur'
  >('Configurateur');
  const [selections, setSelections] = useState<Tcomposants[]>([])




  return (
    <div className="App row mx-0 font">
      <selectionsContext.Provider value={{ selections, setSelections }}>
        <UserContext.Provider value={{ user, setUser }}>
          <div className='col color-green '>

            <header className="App-header">
              <Navbar setPage={setPage} page={page} />

            </header>
            <main>

              <LoginForm />
              <RegisterForm />
              <ConfigurateurGauche />

            </main>
          </div>

          <div className='col color-yellow'>
            <ConfigurateurDroit />
          </div>
          <div>
          <img className='logo-center'
                alt="logoGable"
                src="/img/Logo2.svg">
              </img>
          </div>
        </UserContext.Provider>
      </selectionsContext.Provider>
    </div>

  );
}




export default App;
