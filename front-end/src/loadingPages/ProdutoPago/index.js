import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'
import './style.css'

function ProdutoPago() {

  const history = useHistory();

  useEffect(() => {

    function returnToPedido() {
      setTimeout(() => {
        history.push('/pedido/desc');
      }, 3000);
    }

    returnToPedido();

  });



  return (
    <div className='Produto-Pago'>
      <div>
        <FiCheckCircle color='#fff' size='100px'></FiCheckCircle>
        <div>
          <h1>Pagamento efetuado com sucesso!!!</h1>
        </div>
        <Link className='button' to='/pedido/desc' type="submit">Retornando ao pedido em 3s...</Link>
      </div>
    </div >
  )
}

export default ProdutoPago;
