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
import { Tcomposants } from './Configurateur/tipage/Tcomposants';
import { SelectionProvider, SelectionContext, } from './context/SelectionContext';

function App() {
  const [user, setUser] = useState<TUser>(DEFAULT_USER);
  const [page, setPage] = useState<
    'Configurateur' | 'Profile' | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage"
  >('Configurateur');
  const [selections, setSelections] = useState<{ [key: string]: Tcomposants | undefined }>({});

  const selectionContextValue = {
    selections,
    setSelections,
  };


  return (
    <div className="App row mx-0 font">

      <UserContext.Provider value={{ user, setUser }}>
        <SelectionProvider value={selectionContextValue}>


          <div className='col-12 col-md-6 color-green '>

            <header className="App-header">
              <Navbar setPage={setPage} />

            </header>
            <main>

              <LoginForm />
              <RegisterForm />
              <ConfigurateurGauche />

            </main>
          </div>

          <div className='col-12 col-md-6 color-yellow'>
            <ConfigurateurDroit page={page} setPage={setPage} />

          </div>

          <div>
            <img className='logo-center cursor'
              alt="logoGable"
              src="/img/Logo2.svg"
              onClick={() => {
                setPage('Configurateur');


              }}>
            </img>

          </div>
        </SelectionProvider>
      </UserContext.Provider>

    </div>

  );
}




export default App;
