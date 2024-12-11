import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Login } from './login/login'
import { Main } from './main/home'
import { About } from './about/about'
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div>
      <header>
      <h1 className="site-title">Pompom Study</h1>
      <nav>
        {authState === AuthState.Authenticated && (
        <NavLink to="/">Home</NavLink>
        )}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/about' element={<About  />} />
        <Route
          path='/login'
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
            />
          }
          exact
        />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
        <div>
          <h4>Shelby Endrizzi</h4>
        </div>
        <div>
          <a href="https://github.com/H3bby/startup">GitHub</a>
        </div>
        <div>
          Icons by: <a href="https://www.flaticon.com/packs/user-interface-2706">Indra Maulana Yusuf</a>
        </div>
      </footer>
      </div>
    </BrowserRouter>
  )
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App
