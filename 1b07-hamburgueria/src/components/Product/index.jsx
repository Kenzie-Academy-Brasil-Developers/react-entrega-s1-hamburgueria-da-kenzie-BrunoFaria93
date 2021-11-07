import { useState } from "react"
import Carrinho from "../Carrinho"

const Product = ({filteredProducts}) =>{
    const [listaCarrinho, setListaCarrinho] = useState([])

    function atualizaCarrinho(currentSale){
        if(listaCarrinho.includes(currentSale)){
            console.log('ja tem')
        }else{
            if(listaCarrinho.length < 6){
                setListaCarrinho([...listaCarrinho, currentSale])
            }
        }
    }


    return(
        <div className='big-container'>
            <ul className='products-box-container'>
            
            {filteredProducts.map((item) => {return (<li className='products-box'>
                    <img src={item.img} alt={item.name} />
                    <div className='products-box-bottom'>
                        <h3>{item.name}</h3>
                        <p>{item.category}</p>
                        <span className='preco'>R$ {item.price}</span>
                        <button className='button-add'onClick={
                        function button (){
                                atualizaCarrinho(item)                        
                        } 
                    }>Adicionar</button>
                    </div>                 
                </li>)})
            }

            
            </ul>
            <div className='carrinho'>
                <Carrinho listaCarrinho={listaCarrinho} setListaCarrinho={setListaCarrinho} />
            </div>
            
        </div>
    )
}

export default Product