import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi'


import api from '../../services/api'

import './style.css'

function PedidoEspera() {

  const history = useHistory();

  const [pedidodesc, setPedidoDesc] = useState({});

  useEffect(() => {

    async function loadPedido() {

      let json;

      const response = await api.get('/pedido-atual/')

      json = response.data;


      setPedidoDesc(json)

    }

    function a() {
      setTimeout(() => {
        observar()
      }, 5000);
    }

    async function observar() {

      let json;

      const response = await api.get('/pedido-atual/')

      json = response.data;

      if (json.status === 1) {
        a();
      } else if (json.status === 2) {
        a();
      }
      a();

      setPedidoDesc(json)

    }

    a()
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
            <div className="header-products space">
              <p>Produto</p>
              <p>Quantidade</p>
              <p>Preço</p>
            </div>
            <ul>
              {pedidodesc?.produtos?.map(pedido => (
                <li className='flex space' key={pedido.id} >
                  <p>{pedido.produto.nome} </p>
                  <p>{pedido.quantidade}</p>
                  <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.produto.preco)}</p>
                </li>
              ))}
            </ul>
          </div>


          {pedidodesc.status}

          <div className="valor flex">
            <h3>Total: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedidodesc.total)}</h3>
          </div>
          <div className="btn">
            <Link className='button' to='/finish' type='button'>Finalizar</Link>
          </div>
        </div>
      </form>
    </div >
  )
}

export default PedidoEspera;
