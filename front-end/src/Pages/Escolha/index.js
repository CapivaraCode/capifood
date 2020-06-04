import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import './style.css'
import '../../global.css'



function Escolha() {



  const [salgados, setSalgados] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {

    async function loadSalgados() {
      const response = await api.get('/produtos/?categoria=Salgados')
      setSalgados(response.data);
    }

    async function loadBebidas() {
      const response = await api.get('/produtos/?categoria=Bebidas')
      setBebidas(response.data);
    }

    loadSalgados();
    loadBebidas();

  }, []);

  console.log(bebidas);
  console.log(salgados);


  return (
    <div>
      <form className="form" action="">
        <div className="card">
          <div className="card-top">
            <h1>CapiFood</h1>
            <h2>Faça seu pedido:</h2>
          </div>

          <div className="card-group products">
            <h3 className="card-top">Salgados</h3>
            <ul className="spot-list flex flex-collums">
              {salgados.map(produto => (
                <li className='flex flew-between' key={produto.id}>
                  <p>{produto.nome}</p>
                  <p>{produto.preco}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-group products">
            <h3 className="card-top">Bebidas</h3>
            <ul className="spot-list flex flex-between">
              {bebidas.map(produto => (
                <li className='flex flew-between' key={produto.id}>
                  <p>{produto.nome}</p>
                  <p>{produto.preco}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-group products">
            <h3 className="card-top">Sucos</h3>
            <div>
              <p>  Laranja</p><p>3,50</p>
            </div>
            <div>
              <p>Pessêgo</p><p>3,50</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Escolha;
