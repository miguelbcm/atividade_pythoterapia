import style from './Botoes.module.css'

function Botoes(props){
    return(
        

            <div className={style.filtrar}>
                <div className={style.botao_filtrar}>FILTRAR</div> 
                <div className={style.ordenar}>ORDENAR POR</div>
                <p className={style.produto16}> 16 Produtos</p>


            </div>
            

            
        
    )

}

export default Botoes