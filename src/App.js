import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Categoury, Search } from './components';
import { Logo, Nav } from './AppStyler.jsx';
import Pages from './pages/Pages';
import { GiKnifeFork } from 'react-icons/gi';
function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Logo to={'/'} >
          <GiKnifeFork />
          Food-app
        </Logo>
      </Nav>
      <Search />
      <Categoury />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
