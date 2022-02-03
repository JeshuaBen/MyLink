import logoImg from '../../assets/logo.svg'
import linkImg from '../../assets/link.svg'
import './home.css'
import Menu from '../../components/Menu/Menu.js'
 
export default function Home () {
  return (
    <div className="container-home">

      <div className="logo">
        <img src={logoImg} alt="Link Logo" />
        <h1>JeshuaLink</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="input-area">
        <div>
          <img src={linkImg} alt="Imagem de Link" />
          <input 
            type="text"
            placeholder='Cole seu link aqui...' 
          />
        </div>

        <button>Gerar link</button>
      </div>

      <Menu />
    </div>
  )
}