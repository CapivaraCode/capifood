import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

function Login() {

  const history = useHistory();


  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {


    let dadosLogin = {
      email: data.email,
      password: data.senha
    }

    console.log(dadosLogin);


    api.post('/users/login/', dadosLogin)
      .then(
        response => {
          console.log(response.data);
          localStorage.setItem('userLogon', JSON.stringify(response.data))
          history.push("/escolha");
        }
      )



  }

  return (
    <div id='Main'>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="card-top">
            <h1>CapiFood</h1>
            <h2>Login</h2>
          </div>

          <div className="card-group">
            <label>Email</label>
            <input
              className='input'
              type="text"
              name="email"
              placeholder="Digite seu email"
              ref={register({ required: true })}
            />
            {
              errors.email && errors.email.type === "required" && (
                <p className='error-form'>Campo obrigatório</p>
              )
            }
          </div>

          <div className="card-group">
            <label >Senha</label>
            <input
              className='input'
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              ref={register({ required: true })}
            />
            {
              errors.senha && errors.senha.type === "required" && (
                <p className='error-form'>Campo obrigatório</p>
              )
            }
          </div>

          <div className='card-group'>
            <p>Caso não tenha conta, <Link to='/cadastrar'>Cadastrar</Link></p>
          </div>
          <div className="card-group btn">
            <button className='button' type="submit">ACESSAR</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
