import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu,  } from './container';
import { Navbar, SubHeading  } from './components';





function App() {
  

  return (

      <div>
            <Navbar />
          <Header />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Laurels />
          <Gallery />
          <FindUs />
         
          <Footer />
     
          </div>
  )
}

export default App;
