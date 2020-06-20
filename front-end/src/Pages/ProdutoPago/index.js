import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'
import './style.css'

function ProdutoPago() {
  return (
    <div className='Produto-Pago'>
      <FiCheckCircle color='#fff' size='100px'></FiCheckCircle>
      <div>
        <h1>Pagamento efetuado com sucesso</h1>
      </div>
      <button className='button' type="submit">Retornar ao Pedido</button>
    </div >
  )
}

export default ProdutoPago;
