import React from 'react';
import { Link } from 'react-router-dom'


import './style.css'

function Pedido() {
  return (
    <div>
      <form className="form">
        <div className="card">
          <div className="card-top">
            <h1>CapiFood</h1>
            <h2>Pedido:</h2>
          </div>
          <div className="card-group products">
            <h3 className="card-top">Descrição</h3>
            <div className="flex" >
              <p>3x</p>  <p>Coxinha</p>  <p>3,50</p>
            </div>
            <div className="flex" >
              <p>3x</p>  <p>Coxinha</p>  <p>3,50</p>
            </div>
            <div className="flex" >
              <p>3x</p>  <p>Coxinha</p>  <p>3,50</p>
            </div>
            <div className="flex" >
              <p>3x</p>  <p>Coxinha</p>  <p>3,50</p>
            </div>
          </div>

          <div className="valor flex">
            <h3>Valor : 25,00</h3>
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
