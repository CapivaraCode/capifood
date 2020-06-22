import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

function Pagamento() {
  return (
    <div id='Main'>
      <form className="form">
        <div className="card">
          <div className="card-top">
            <h1>CapiFood</h1>
            <h2>Pagamento</h2>
          </div>
          <div className="card-group">
            <label>Nome </label>
            <input className='input' type="text" name="nome" placeholder="Nome Completo" required />
          </div>

          <div className="card-group">
            <label>Número do Cartão</label>
            <input className='input' type="number" name="numeroC" placeholder="Número do Cartão" required />
          </div>

          <div className="card-group" >
            <label>Tipo de cartão</label>
            <select required>
              <option>Visa</option>
              <option>MasterCard</option>
              <option>AmericanExpress</option>
              <option>PayPal</option>
            </select>
          </div>
          <div className="ajustar" required>
            <label>Data de vencimento</label>
            <div className="flextwo">
              <select required>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <select required>

                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
              </select>
            </div>
          </div>


          <Link className='button ' to='/pedido/pag/finalizado'>PAGAR</Link>

        </div>
      </form>
    </div >
  )
}

export default Pagamento;
