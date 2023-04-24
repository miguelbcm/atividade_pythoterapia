import style from './Nav.module.css'

function Nav(props){
    return(
        <div>
            <nav>
                
                <div className={style.menus}>Óleo Esenciais</div>
                <div className={style.menus}>Óleo Vegetais</div>
                <div className={style.menus}>Sinergia</div>
                <div className={style.menus}>Cosméticos Naturais</div>
                <div className={style.menus}>Higiene Pessoal</div>
                <div className={style.menus}>Aromatizadores</div>
                <div className={style.menus}>Suplementos</div>
                <div className={style.menus}>Acessórios</div>
                <div className={style.menus}>Ofertas</div>
                <div className={style.menus}>Consultor(a)</div>
            </nav>
            <hr/>
        </div>
    )
}

export default Nav