import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById("root"));

function Page(){
  return (
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>
  )
}

function Main()
{
  return(
    <main>
    <h1>Reasons I'm excited to learn React</h1>
  <ol>
      <li className='info-list-item'>School leaving exam will be great</li>
      <li className='info-list-item'>I'll have fun learning something new</li>
</ol>
    </main>
  )
}

function Header()
{
  return(
    <header className='header-flexbox'>
    <img src="react-logo.png" className='nav-logo' alt='react logo'/>
    <nav>
    <ul className='nav-list'>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </nav>
    </header>
  )
}

function Footer(){
  return(
    <footer className='footer'>
      © 2026 Vörös development. All rights reserved.
    </footer>
  )
}

root.render(
  <Page/>
)