import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiCoffee } from 'react-icons/fi'
import './style1.css'

function Finish() {

  const history = useHistory();

  useEffect(() => {

    function returnToPedido() {
      setTimeout(() => {
        history.push('/escolha');
      }, 3000);
    }

    returnToPedido();

  });



  return (
    <div className='Finish'>
      <div>
        <FiCoffee color='#fff' size='100px'></FiCoffee>
        <div>
          <h1>Obrigado por comprar com nossa loja!!!</h1>
        </div>
        <Link className='button' to='/escolha' type="submit">Retornando a  em 3s...</Link>
      </div>
    </div >
  )
}

export default Finish;
