import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

function Cadastrar() {
  return (
    <div>
      <form className="form">
        <div className="card">
            <div className="card-top">
                <h1>CapiFood</h1>
                <h2>Cadastro</h2>
            </div>
           
            <div className="card-group">
                <label >Nome Completo</label>
                <input className='input'  type="name" name="nome" placeholder="Digite seu nome" required/>
            </div>

            <div className="card-group">
                <label >Email</label>
                <input className='input' type="text" name="email" placeholder="Digite seu email" required/>
            </div>

            <div className="card-group">
                <label >CPF</label>
                <input className='input' type="number" name="CPF" placeholder="Digite seu cpf" required/>
            </div>
            

            <div className="card-group btn">
              <Link className='button' to='/' >Finalizar</Link>
            </div>
        </div>
    </form>
    </div>
  )
}

export default Cadastrar;
