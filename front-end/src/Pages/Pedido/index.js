import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi'


import api from '../../services/api'

import './style.css'

function Pedido() {

  const history = useHistory();

  const [pedido_desc, setPedidoDesc] = useState([]);

  useEffect(() => {

    async function loadPedido() {

      const response = await api.get('/pedido-atual/')

      setPedidoDesc(response.data);

    }

    loadPedido()

  }, []);

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }




  return (
    <div id='Main' className='page_pedido_desc'>
      <form className="form">

        <div className="card">
          <div className='btn-logout-box'>
            <div onClick={handleLogout}>
              <FiLogOut className='click ' color='#e02041' size='20'></FiLogOut>
              <p>Sair</p>
            </div>
          </div>
          <div className="card-top">
            <h1>CapiFood</h1>
            <h2>Pedido:</h2>
          </div>
          <div className="card-group products">
            <h3 className="card-top">Descrição</h3>
            <ul>
              {pedido_desc.map(produto => (
                <li className='flex' >
                  <div className="caixa-baixo">
                    <p>{produto.id_produto}</p>
                    <p className='center-text'>{produto.quantidade}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="valor flex">
            <h3>Valor : 25,00</h3>
          </div>
          <div className='flex  refazer-pedido'>
            <Link to='/escolha'>Refazer Pedido</Link>
          </div>

          <div className="btn">
            <Link className='button' to='/pedido/pag'>Finalizar</Link>
          </div>
        </div>
      </form>
    </div >
  )
}

export default Pedido;
