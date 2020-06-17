import React from 'react';
import { useForm } from "react-hook-form";

import api from '../../services/api'

import './style.css'

function Cadastrar() {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {

    let user;

    let nomeCompleto = data.nomeUser;
    let email = data.email;
    let senha = data.senha;

    user = {
      email: email,
      username: nomeCompleto,
      password: senha
    }

    console.log(user);


    api.post('/users/', user)

  }

  return (
    <div id='Main'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="card-top">
            <h1>CapiFood</h1>
            <h2>Cadastro</h2>
          </div>

          <div className="card-group">
            <label >Nome Completo</label>
            <input className='input'
              name="nomeUser"
              placeholder="Digite seu nome"
              ref={register({ required: true })}
            />
            {
              errors.nomeUser && errors.nomeUser.type === "required" && (
                <p className='error-form'>Campo obrigatório</p>
              )
            }
          </div>

          <div className="card-group">
            <label >Email</label>
            <input
              className='input'
              name="email"
              type="email"
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
              type='password'
              name="senha"
              placeholder="Digite sua senha"
              ref={register({ required: true, minLength: 4, maxLength: 16 })}
            />
            {
              errors.senha && errors.senha.type === "required" && (
                <p className='error-form'>Campo obrigatório</p>
              )
            }
            {
              errors.senha && errors.senha.type === "minLength" && (
                <div>
                  <p className='error-form'>Senha muito curta</p>
                  <p className='error-form-correct'>Mínimo 4 caracteres</p>
                </div>
              )
            }
            {
              errors.senha && errors.senha.type === "maxLength" && (
                <div>
                  <p className='error-form'>Senha muito longa</p>
                  <p className='error-form-correct'>Máximo 16 caracteres</p>
                </div>
              )
            }
          </div>


          <button className='button' type='submit'>Finalizar</button>
        </div>
      </form>
    </div>
  )
}

export default Cadastrar;
