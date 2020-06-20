import React, { useState, useEffect } from 'react'
import { FiMinus, FiPlus, FiLogOut } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

import api from '../../services/api'
import './style.css'
import '../../global.css'



function Escolha() {


  const history = useHistory();


  const [salgados, setSalgados] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [sucos, setSucos] = useState([]);


  useEffect(() => {

    async function loadSalgados() {
      const response = await api.get('/produtos/?categoria=Salgados')
      response.data = response.data.map(x => { x.qtd = 0; return x })
      setSalgados(response.data);
      console.log(response.data);

    }

    async function loadBebidas() {
      const response = await api.get('/produtos/?categoria=Bebidas')
      response.data = response.data.map(x => { x.qtd = 0; return x })
      setBebidas(response.data);
    }

    async function loadSucos() {
      const response = await api.get('/produtos/?categoria=Sucos')
      response.data = response.data.map(x => { x.qtd = 0; return x })
      setSucos(response.data);
    }

    loadSalgados();
    loadBebidas();
    loadSucos();

  }, []);

  function addQuantidade(produto) {
    if (produto.qtd === 10) {

    } else {
      produto.qtd += 1;
    }

    setSalgados([...salgados]);
    setBebidas([...bebidas]);
    setSucos([...sucos]);


  }

  function remQuantidade(produto) {
    if (produto.qtd === 0) {

    } else {
      produto.qtd -= 1;
    }

    setSalgados([...salgados]);
    setBebidas([...bebidas]);
    setSucos([...sucos]);

  }


  function addProduto(produto) {

    setSalgados([...salgados]);
    setBebidas([...bebidas]);
    setSucos([...sucos]);

  }

  async function enviarPedido() {

    let pedido;

    let pedidoList = salgados.concat(sucos).concat(bebidas).filter(
      produto => (produto.qtd > 0)
    )

    pedido = pedidoList.map(produto => (
      {
        produto_id: produto.id,
        quantidade: produto.qtd
      }
    ));

    console.log(pedido);

    await api.post('/pedidos/', { produtos: pedido })

    history.push('/pedido');

  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }


  return (
    <div id='Main' className='page-escolha'>
      <div className="card">

        <div className='btn-logout-box'>
          <div onClick={handleLogout}>
            <FiLogOut className='click ' color='#e02041' size='20'></FiLogOut>
            <p>Sair</p>
          </div>
        </div>
        <div className="card-top">
          <h1>CapiFood</h1>
          <h2>Faça seu pedido:</h2>
        </div>

        <div className="card-group produtos">
          <h3>Salgados</h3>
          <ul>
            <div className="caixa-cima">
              <p>Produto</p>
              <p>Quantidade</p>
              <p className='preco'>Preço</p>
            </div>
            {salgados.map(produto => (
              <li className='flex' key={produto.id} onClick={() => addProduto(produto)}>

                <div className="caixa-baixo">
                  <p>{produto.nome}</p>
                  <div className='div-qtd'>
                    <FiMinus className='click' color='#e02041' onClick={() => remQuantidade(produto)} size='20'></FiMinus>
                    <p className='center-text'>{produto.qtd}</p>
                    <FiPlus className='click' color='#e02041' onClick={() => addQuantidade(produto)} size='20'></FiPlus>
                  </div>
                  <p className='center-text'>R$: {produto.preco}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-group produtos">
          <h3>Refrigerantes</h3>
          <ul>
            <div className="caixa-cima">
              <p>Produto</p>
              <p>Quantidade</p>
              <p className='preco'>Preço</p>
            </div>
            {bebidas.map(produto => (
              <li className='flex' key={produto.id} onClick={() => addProduto(produto)}>

                <div className="caixa-baixo">
                  <p>{produto.nome}</p>
                  <div className='div-qtd'>
                    <FiMinus className='click' color='#e02041' onClick={() => remQuantidade(produto)} size='20'></FiMinus>
                    <p className='center-text'>{produto.qtd}</p>
                    <FiPlus className='click' color='#e02041' onClick={() => addQuantidade(produto)} size='20'></FiPlus>
                  </div>
                  <p className='center-text'>R$: {produto.preco}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-group produtos">
          <h3>Sucos</h3>
          <ul>
            <div className="caixa-cima">
              <p>Produto</p>
              <p>Quantidade</p>
              <p className='preco'>Preço</p>
            </div>
            {sucos.map(produto => (
              <li className='flex' key={produto.id} onClick={() => addProduto(produto)}>

                <div className="caixa-baixo">
                  <p>{produto.nome}</p>
                  <div className='div-qtd'>
                    <FiMinus className='click' color='#e02041' onClick={() => remQuantidade(produto)} size='20'></FiMinus>
                    <p className='center-text'>{produto.qtd}</p>
                    <FiPlus className='click' color='#e02041' onClick={() => addQuantidade(produto)} size='20'></FiPlus>
                  </div>
                  <p className='center-text'>R$: {produto.preco}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={enviarPedido} type='button' className='button'>Finalizar</button>

      </div>
    </div>
  )
}

export default Escolha;
