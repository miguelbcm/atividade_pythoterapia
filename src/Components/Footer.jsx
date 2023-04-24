import style from './Footer.module.css'
import cartoes from './imagens/img_cartoes.png'
import protegido from './imagens/img_protegido.png'

function Footer(props){
    return(
        <div className={style.fundo_footer}>
            

            <div className={style.footer_coluna1}>
                <p className={style.texto_footer1}>
                    <div className={style.sobre}>SOBRE</div>
                    <br/> Quem somos (A Empresa)<br/> Nossos Contatos<br/> Trabalhe conosco<br/> Fale Conosco (SAC)<br/>Consultora<br/> Atacado
                </p>
            </div>

            <div className={style.footer_coluna2}>
                <p className={style.texto_footer2}>
                    <div className={style.suporte}>Suporte</div>
                    <br/> Politica de entrega<br/> Politica de troca de Devolução<br/> Ingestão de Óleos Essenciais<br/> Cromatografia<br/><br/>Encarregado de Dados-JKD ME<br/> Privacidade@phytoterapica.com.br
                </p>
            </div>

            <div className={style.footer_coluna3}>
                <p className={style.texto_footer3}>
                    <div className={style.area}>Area do Cliente</div>
                    <br/> Login<br/> Carrinho<br/> Minha Conta<br/> Meus Pedidos<br/><br/> Preferência de Cookies<br/>
                </p>
            </div>

            <div className={style.footer_coluna4}>
                <p className={style.texto_footer4}>
                    <div className={style.pagamento}>Formas de Pagamento
                    <img className={style.cartoes} src={cartoes} alt="cartoes" />
                    </div>
                    
                </p>
            </div>

            <div className={style.protegido}>
                <img src={protegido} alt="protegido_footer" />
            </div>


        </div>
    )
}

export default Footer