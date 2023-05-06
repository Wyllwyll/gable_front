import { useEffect, useState } from 'react';
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
import { TOrders } from './PanelUser/tipage/TOrders';
import Footer from './footer/Components/footer';

function App() {
  const [user, setUser] = useState<TUser>(DEFAULT_USER);
  const [page, setPage] = useState<
    'Configurateur' | 'Profile' | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage"
  >('Configurateur');
  const [selections, setSelections] = useState<{ [key: string]: Tcomposants | undefined }>({});
  const [order, setOrder] = useState<TOrders | null>(null);

  const selectionContextValue = {
    selections,
    setSelections,
    order,
    setOrder
  };

  // Récupére l'utilisateur stocké en local storage apres chaques rendu du composant
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); //Recupere des données de l'utilisateur stockées
    if (storedUser) {
      setUser(JSON.parse(storedUser)); //Si l'utilisateur existe dans le local storage, mettre à jour le state de l'utilisateur avec ces données
    }
  }, []);


  /* est exécuté chaque fois que le state de l'utilisateur change. 
    Les données de l'utilisateur sont alors stockées dans le local storage pour maintenir la session de l'utilisateur après le rafraîchissement de la page. */
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);


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
                setPage('Configurateur')
              }}>
            </img>
            <Footer />
          </div>
        </SelectionProvider>
      </UserContext.Provider>
      
    </div>

  );
}




export default App;
