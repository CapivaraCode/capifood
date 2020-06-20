import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi'


import api from '../../services/api'

import './style.css'

function Pedido() {

  const history = useHistory();

  const [pedidodesc, setPedidoDesc] = useState({});

  useEffect(() => {

    async function loadPedido() {

      let json;

      const response = await api.get('/pedido-atual/')

      json = response.data;

      setPedidoDesc(json)
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
              {pedidodesc?.produtos?.map(pedido => (
                <li className='flex space' key={pedido.id} >
                  <p>{pedido.produto.nome} </p>
                  <p>{pedido.quantidade}</p>
                  <p>{pedido.produto.preco}</p>
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
            <button className='button' type='button'>Finalizar</button>
          </div>
        </div>
      </form>
    </div >
  )
}

export default Pedido;
