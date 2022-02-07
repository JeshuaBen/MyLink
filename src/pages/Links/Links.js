import { useState, useEffect } from 'react'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import './links.css'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'

import { getLinksSaved, deleteLink } from '../../services/storedLinks'

export default function Links() {
  const [linksSaved, setlinksSaved] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);


  useEffect( () => {
    async function getLinks() {
      const result = await getLinksSaved('@encurtaLink')

      if(result.length === 0) {
        setEmptyList(true)
      }

      setlinksSaved(result)
    }

    getLinks()
  }, [])

  function onHandleOpenModal(link) {
    setData(link);

    setShowModal(true);
  }

  async function onHandleDelete(id) {
    const result = await deleteLink(linksSaved, id)

    if(result.length === 0) {
      console.log('você não tem links')
    }
    
    setlinksSaved(result);
  }


  return(

    <div className='links-container'>

      <div className='links-header'>
        <Link to='/'>
          <FiArrowLeft size={38} color='#FFF'/>
        </Link>
        <h1>Meus Links</h1>
      </div>
      
      {linksSaved.map (link => (
      <div key={link.id} className='links-item'>
        <button 
        className='link' 
        onClick={ () => onHandleOpenModal(link) }
        >
          <FiLink 
          size={18} 
          color='#FFF'
          />
          {link.long_url}
        </button>
        <button className='link-delete' onClick={ () => onHandleDelete(link.id)}>
          <FiTrash size={24} color='#FF5454'/>
        </button>
      </div>
      ))}


      { showModal && (
        <Modal 
          closeModal={ () => setShowModal(false)}
          content = {data} 
        />
      )}
      
    </div>
  )
}