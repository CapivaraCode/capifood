import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <form className="form">
        <div className="card">
          <div className="card-top">
            <h1>CapiFood</h1>
            <h2>Login</h2>
          </div>

          <div className="card-group">
            <label>Email</label>
            <input className='input' type="text" name="email" placeholder="Digite seu email" required />
          </div>

          <div className="card-group">
            <label >CPF</label>
            <input className='input' type="number" name="CPF" placeholder="Digite seu cpf" required />
          </div>

          <div className="card-group flex">
            <input type="checkbox" id="good" className='checkbox' />
            <label>
              <span>
                Lembrar senha
                  </span>
            </label>
          </div>
          <div className='card-group'>
            <p>Caso não tenha conta, <Link to='/cadastrar'>Cadastrar</Link></p>
          </div>


          <div className="card-group btn">
            <Link to='/escolha' className='button' type="submit">ACESSAR</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
