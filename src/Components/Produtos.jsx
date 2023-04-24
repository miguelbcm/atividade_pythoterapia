import style from './Produtos.module.css'
import oleo_lavanda from './imagens/oleo_lavanda.png'
import oleo_geranio from './imagens/oleo_geranio.png'
import oleo_alecrim from './imagens/oleo_alecrim.png'
import oleo_hortela_pimenta from './imagens/oleo_hortela_pimenta.png'
import oleo_melaleuca from './imagens/oleo_melaleuca.png'
import oleo_laranja from './imagens/oleo_laranja.png'
import oleo_eucalipto from './imagens/oleo_eucalipto.png'
import oleo_bergamoto from './imagens/oleo_bergamota.png'
import oleo_lemongrass from './imagens/oleo_lemongrass.png'
import oleo_salvia from './imagens/oleo_salvia.png'
import oleo_patchouli from './imagens/oleo_patchouli.png'
import oleo_grapefruit from './imagens/oleo_grapefruit.png'
import oleo_manjerona from './imagens/oleo_manjerona.png'
import oleo_gengibre from './imagens/oleo_gengibre.png'
import oleo_erva_doce from './imagens/oleo_erva_doce.png'
import oleo_canela from './imagens/oleo_canela.png'

function Produtos(props){
    return(
        <div className={style.section_principal}>
            
            <div className={style.section_produto}>
                {/* inicio do lavanda produto 1*/} 
                <div className={style.fundo_produtos1}>
                    <img src={oleo_lavanda} alt="imagem oleoLavanda" />
                    <p className={style.texto_lavanda}>Óleo Essencial de Lavanda (gt.<br/>França) - 10ml</p>
                    <p className={style.preco_lavanda}>R$ 60,00</p>
                    <p className={style.juros_lavanda}>(ou até 3x de R$ 20,00 sem juros)</p>
                </div>
                {/* Fim do lavanda produto1 1*/}

               {/* inicio do geranio produto 2*/}
                <div className={style.fundo_produtos2}>
                    <img src={oleo_geranio} alt="imagem oleo geranio" />
                        <p className={style.texto_geranio}>Óleo Essencial de Gerãnio - 5ml</p>
                        <p className={style.preco_geranio}>R$ 44,00</p>
                        <p className={style.juros_geranio}>(ou até 3x de R$ 14,66 sem juros)</p>
                </div>
                {/* Fim do geranio produto 2*/}

                {/* inicio do alecrim produto 3*/}
                <div className={style.fundo_produtos3}>
                <img src={oleo_alecrim} alt="imagem oleo alecrim" />
                        <p className={style.texto_alecrim}>Óleo Essencial de Alecrim  (qt.<br/>Cineol) - 10ml</p>
                        <p className={style.preco_alecrim}>R$ 37,00</p>
                        <p className={style.juros_alecrim}>(ou até 3x de R$ 12,33 sem juros)</p>
                </div>
                {/* Fim do alecrim produto 3*/}
                
                
                {/* inicio do hortela pimenta produto 4*/}
                <div className={style.fundo_produtos4}>
                <img src={oleo_hortela_pimenta} alt="imagem oleo pimenta" />
                        <p className={style.texto_hortela_pimenta}>Óleo Essencial de Hortelã-Pimenta<br/>(Menta)- 10ml</p>
                        <p className={style.preco_hortela_pimenta}>R$ 52,00</p>
                        <p className={style.juros_hortela_pimenta}>(ou até 3x de R$ 17,33 sem juros)</p>
                </div>
                {/* Fim do hortela pimenta produto 4*/}
            </div>

            {/* Fim da primeira linha de  produtos*/}


             {/* inicio da segunda linha de produtos*/}
            <div className={style.section_produto2}>
                 {/* inicio do melaleuca produto 5*/} 
                 <div className={style.fundo_produtos5}>
                    <img src={oleo_melaleuca} alt="imagem oleo melaleuca" />
                    <p className={style.texto_melaleuca}>Óleo Essencial de Melaleuca (Tea<br/>Tree) - 10ml</p>
                    <p className={style.preco_melaleuca}>R$ 50,00</p>
                    <p className={style.juros_melaleuca}>(ou até 3x de R$ 16,66 sem juros)</p>
                </div>
                {/* Fim do melaleuca produto5*/}

                 {/* inicio do laranja produto 6*/} 
                 <div className={style.fundo_produtos6}>
                    <img src={oleo_laranja} alt="imagem oleo laranja" />
                    <p className={style.texto_laranja}>Óleo Essencial de Laranja (Orgânico) - 10ml</p>
                    <p className={style.preco_laranja}>R$ 26,00</p>
                    <p className={style.juros_laranja}>(ou até 3x de R$ 8,66 sem juros)</p>
                </div>
                {/* Fim do laranja produto 6*/}

                {/* inicio do eucalipto produto 7*/} 
                <div className={style.fundo_produtos7}>
                    <img src={oleo_eucalipto} alt="imagem oleo eucalipto" />
                    <p className={style.texto_eucalipto}>Óleo Essencial de Eucalipto Globulus - 10ml</p>
                    <p className={style.preco_eucalipto}>R$ 35,20</p>
                    <p className={style.juros_eucalipto}>(ou até 3x de R$ 11,73 sem juros)</p>
                </div>
                {/* Fim do eucalipto produto 7*/}

                {/* inicio do bergamoto produto 8*/} 
                <div className={style.fundo_produtos8}>
                    <img src={oleo_bergamoto} alt="imagem oleo bergamoto" />
                    <p className={style.texto_bergamoto}>Óleo Essencial de Bergamota - 5ml</p>
                    <p className={style.preco_bergamoto}>R$ 40,00</p>
                    <p className={style.juros_bergamoto}>(ou até 3x de R$ 13,33 sem juros)</p>
                </div>
                {/* Fim do bergamota produto 8*/}
            </div>
            {/* fim da segunda linha de produtos*/}


            {/* inicio da terceira linha de produtos */}
            <div className={style.section_produto3}>
                 {/* inicio lemongrass produto 9*/} 
                 <div className={style.fundo_produtos9}>
                    <img src={oleo_lemongrass} alt="imagem oleo lemongrass" />
                    <p className={style.texto_lemongrass}>Óleo Essencial de Lemongrass<br/>(Orgãnico) - 10ml</p>
                    <p className={style.preco_lemongrass}>R$ 39,00</p>
                    <p className={style.juros_lemongrass}>(ou até 3x de R$ 13,00 sem juros)</p>
                </div>
                {/* Fim do lemongrass produto 9*/}

                {/* inicio salvia produto 10*/} 
                <div className={style.fundo_produtos10}>
                    <img src={oleo_salvia} alt="imagem oleo salvia" />
                    <p className={style.texto_salvia}>Óleo Essencial de Sávia Esclareia -<br/> 5ml</p>
                    <p className={style.preco_lemongrass}>R$ 51,20</p>
                    <p className={style.juros_lemongrass}>(ou até 3x de R$ 17,06 sem juros)</p>
                </div>
                {/* Fim do lemongrass produto 10*/}

                {/* inicio salvia produto 11*/} 
                <div className={style.fundo_produtos11}>
                    <img src={oleo_patchouli} alt="imagem oleo patchouli" />
                    <p className={style.texto_patchouli}>Óleo Essencial de Patchouli - 5ml</p>
                    <p className={style.preco_patchouli}>R$ 37,00</p>
                    <p className={style.juros_patchouli}>(ou até 3x de R$ 12,33 sem juros)</p>
                </div>
                {/* Fim do lemongrass produto 11*/}

                {/* inicio salvia produto 12*/} 
                <div className={style.fundo_produtos12}>
                    <img src={oleo_grapefruit} alt="imagem oleo grapefruit" />
                    <p className={style.texto_grapefruit}>Óleo Essencial de Grapefruit - 10ml</p>
                    <p className={style.preco_grapefruit}>R$ 56,00</p>
                    <p className={style.juros_grapefruit}>(ou até 3x de R$ 18,66 sem juros)</p>
                </div>
                {/* Fim do lemongrass produto 12*/}
                {/* Fim da terceira linha de produtos*/}

            </div>




                {/* inicio da quarta linha de produtos*/}
                <div className={style.section_produto4}>
                    {/* inicio salvia produto 13*/} 
                <div className={style.fundo_produtos13}>
                    <img src={oleo_manjerona} alt="imagem oleo manjerona" />
                    <p className={style.texto_manjerona}>Óleo Essencial de Manjerona - 5ml</p>
                    <p className={style.preco_manjerona}>R$ 56,00</p>
                    <p className={style.juros_manjerona}>(ou até 3x de R$ 18,66 sem juros)</p>
                </div>

                   {/* inicio salvia produto 14*/} 
                   <div className={style.fundo_produtos14}>
                    <img src={oleo_gengibre} alt="imagem oleo gengibre" />
                    <p className={style.texto_gengibre}>Óleo Essencial de Gengibre - 5ml</p>
                    <p className={style.preco_gengibre}>R$ 48,00</p>
                    <p className={style.juros_gengibre}>(ou até 3x de R$ 16,00 sem juros)</p>
                </div>

                {/* inicio salvia produto 15*/} 
                <div className={style.fundo_produtos15}>
                    <img src={oleo_erva_doce} alt="imagem oleo erva doce" />
                    <p className={style.texto_erva_doce}>Óleo Essencial de Erva-Doce<br/>(Funchos) - 5ml</p>
                    <p className={style.preco_erva_doce}>R$ 42,80</p>
                    <p className={style.juros_erva_doce}>(ou até 3x de R$ 14,26 sem juros)</p>
                </div>

                {/* inicio salvia produto 16*/} 
                <div className={style.fundo_produtos16}>
                    <img src={oleo_canela} alt="imagem oleo canela" />
                    <p className={style.texto_canela}>Óleo Essencial de Canela Cássia -<br/> 10ml</p>
                    <p className={style.preco_canela}>R$ 42,80</p>
                    <p className={style.juros_canela}>(ou até 3x de R$ 14,26 sem juros)</p>
                </div>

            </div>

        </div>
    )
}

export default Produtos