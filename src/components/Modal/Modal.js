import './modal.css'
import { FiX, FiClipboard } from 'react-icons/fi'

export default function Modal( {closeModal, content} ) {

  async function onHandleCopyLink () {
    await navigator.clipboard.writeText(content.link)
  }

  return (
    <div className='modal-container' >

      <div className="modal-header">
        <h2>Link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color='#000'/>
        </button>
      </div>

      <span>
        {content.long_url}
      </span>

      <button className='modal-link' onClick={onHandleCopyLink}>
        {content.link}
        <FiClipboard size={20} color='#FFF' />
      </button>
    </div>
  )
}