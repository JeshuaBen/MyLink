import './error.css'
import errorImg from '../../assets/notfound.svg'
import { Link } from 'react-router-dom'

export default function Error () {
  return (
    <div className='error-container'>
      <img src={errorImg} alt="Imagem de erro 404" />
      <h1>Página não encontrada!</h1>
      <Link
      className='return-button' 
      to='/'
      >
      Voltar para home
      </Link> 

    </div>
  )
}