
import style from "./Header.module.css";
import Logo from './imagens/logo.png';
import carrinho_compras from './imagens/carrinho_compras.png';
import perfil from './imagens/perfil.png';


function Header(props){
    return(
        <div>
            <header>
                <img className={style.logo} src={Logo} alt="Logo" />
                
                    <input className={style.procura} type="text" placeholder="O que você procura?" />
                    <div className={style.procura2}>-5% NA PRIMEIRA COMPRA</div>
                    <img className={style.perfil} src={perfil} alt="login" />
                    <img className={style.carrinho} src={carrinho_compras} alt="carrinho" />
                   
                    
                    

            </header>
            <hr></hr>
        </div>
    )
}

export default Header


