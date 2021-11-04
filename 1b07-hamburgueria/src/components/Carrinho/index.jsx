const Carrinho = ({listaCarrinho, setListaCarrinho}) => {
    function removeItem(itemRemover){
        setListaCarrinho(listaCarrinho.filter((item) => {return item != itemRemover}))
    }
    function limpaCarrinho(){
        setListaCarrinho([])
    }
return(
    <div className='carrinho-container'>
        <h2>Carrinho de compras</h2>
        <ul>
        
            {listaCarrinho.map((item) => {return <li className='carrinho-lista'>
                <img src={item.img} alt={item.name} />
                <div>
                    <h3>{item.name}</h3>
                    <span>{item.category}</span>
                </div>
                <button className='button-x' onClick={() => removeItem(item)
                }>Remover</button>
                </li>})}
            
        </ul>
        
              
                <div className='remove-button-father'>
                    <div className='total-price'><span className='total'>Total: </span>
                    <span className='preco-carrinho'>R$ {listaCarrinho.reduce((valorAnterior, valorAtual) => {return valorAtual.price + valorAnterior}, 0).toFixed(2)} </span></div>
                    <button className='button-remover' onClick={() =>limpaCarrinho()}>Remover todos</button>
                </div>
                
       
    </div>
)
}

export default Carrinho