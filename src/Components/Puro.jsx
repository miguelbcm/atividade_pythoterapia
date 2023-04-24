import style from './Puro.module.css'
import texto_vegano from './imagens/texto_vegano.png'
import texto_testes from './imagens/texto_testes.png'
import texto_purezas from './imagens/texto_purezas.png'

function Puro(){
    return(
        <div>

            <div className={style.vegano}>
                <img className={style.vegano1} src={texto_vegano} alt="texto pureza" /> 
                <hr className={style.hr1}/>
                <img className={style.testes} src={texto_testes} alt="texto teste" />
                <hr className={style.hr2}/>
                <img className={style.puro} src={texto_purezas} alt="texto teste" />
            </div>

          <hr/>
        </div>
    )
}

export default Puro