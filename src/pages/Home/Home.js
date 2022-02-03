import logoImg from '../../assets/logo.svg'
import linkImg from '../../assets/link.svg'
import './home.css'
import Menu from '../../components/Menu/Menu.js'
import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import api from '../../services/api'

 
export default function Home () {
  const [link, setLink] = useState('');
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink () {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      setLink('')

    }catch {
      alert('Ops, algo deu errado!')
      setLink('')
    }
  }

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
            placeholder='Cole seu link aqui...'
            value={link} 
            onChange={ (event) => setLink(event.target.value) } 
          />
        </div>

        <button onClick={handleShortLink}>
          Encurtar link
        </button>
      </div>

      <Menu />
      

      {/* Renderização de condição  If show modal true => modal, caso não, hide.*/}
      { showModal && (
        <Modal 
          closeModal={ () => setShowModal(false) }
          content = {data}  
        />
      )}
    </div>
  )
}