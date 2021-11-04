const Header = ({userInput, setUserInput, showProducts}) => {
    
    return (
        <div>
             <header className='header'>
                <h1>Buguer Kenzie</h1>
                <div className='input'>
                    <input 
                    type='text'
                    value={userInput}
                    onChange={(evt) => setUserInput(evt.target.value)}></input>
                    
                    <button className='button-pesquisar' onClick={() => showProducts(userInput)}>Pesquisar</button>
                    
                </div>
            </header>
        </div>
    )
}
export default Header