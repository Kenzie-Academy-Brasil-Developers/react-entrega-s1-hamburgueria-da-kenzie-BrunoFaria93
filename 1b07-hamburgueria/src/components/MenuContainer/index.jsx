import Product from "../Product"

const MenuContainer = ({filteredProducts}) =>{
    return(
        <div className='menu-container'>
            <Product filteredProducts={filteredProducts}/>
        </div>
    )
}

export default MenuContainer