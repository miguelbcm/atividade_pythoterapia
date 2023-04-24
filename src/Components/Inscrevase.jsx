import style from './Inscrevase.module.css'

function Inscrevase(){
    return(
        <div className={style.fundo_inscrevase}>

            <div className={style.inscrevase}>
                <p className={style.inscreva_se}>INSCREVA-SE</p>
                <p className={style.receba}>E RECEBA NOVIDADES E<br/>PROMOÇÕES</p>
            </div>

            <div className={style.inscreva_input}>
                <input className={style.email} type="email" placeholder='Seu e-mail' />
                <div className={style.assinar}>ASSINAR NEWSLETTER </div>
            </div>
        </div>
        
    )
}

export default Inscrevase