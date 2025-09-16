import './App.css'


import About from './About'

import Footer from './Footer'

import Info from './Info'

import Interests from './Interests'


export default function App() {
  return (
    <main>
      <div className="Main">
        <Info/>
        <div id="closer">
          <About/>
          <Interests/>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
