import style from './Sessao.module.css'

function Sessao(){
    return(
        <div>
            <section>
                <h2 className={style.titulo_oleo}>Óleos Essenciais</h2>
                <p className={style.texto_img}>Óleos essenciais são compostos naturais extraidos da parte aromática<br/> das plantas, como folhas,
                flores, galhos, troncos, raizes e casca de frutos.
                </p>
                

            </section>
        </div>
    )
}

export default Sessao