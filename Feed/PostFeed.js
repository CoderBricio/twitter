import ModeloPostTexto from './PropsPost'
import './Feed.css';
import './Pesquisa.css';

import {BsImageFill} from 'react-icons/bs'
import {AiOutlineFileGif} from 'react-icons/ai'
import {ImParagraphLeft} from 'react-icons/im'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
import {BsCalendarDate} from 'react-icons/bs'
import {BiLocationPlus} from 'react-icons/bi'
import {SiTheconversation}from 'react-icons/si'
import {AiOutlineRetweet} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {FiShare} from 'react-icons/fi'
import {BsThreeDots} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import {HiChevronDoubleUp} from 'react-icons/hi'




export default function Posts () {
    return (
        <div >
            <body className="Geral">
          
                <div className="ContainerQuemSeguir">
                    <div>
                        <h2>Quem seguir</h2>
                        <h4 className='HBONome'>HBO Max Brasil</h4>
                        <button className='SeguirHbo'>Seguir</button>
                        <img src='https://pbs.twimg.com/profile_images/1571197363787546625/lUuhM2-4_400x400.jpg'  className='IMGHBO'/>
                    </div>

                    <div>
                        <h4 className='ACCENTURENome'>Accenture Brasil</h4>
                        <button className='SeguirAccenture'>Seguir</button>
                        <img src='https://pbs.twimg.com/profile_images/1527318191189291008/YDoByMoE_400x400.jpg'  className='IMGACCENTURE'/>
                    </div>
          
                    <div>
                        <h4 className='SanNome'>Samsung Brasil </h4>
                        <button className='SeguirSan'>Seguir</button>
                        <img src='https://pbs.twimg.com/profile_images/1574745070321934336/28Padzv2_400x400.jpg' className='IMGSAN'/>
                    </div>
        
                    <p className='MostrarMais'>Monstrar mais</p>    
            
                </div>

                <div className='INFOS'>
                    <p>Termos de Serviço</p> <p className='PPo'>Política de Privacidade</p>
                </div>
                <div className='ContainerPesquisaPrincipal'>
                <div className="ContainerPesquisa">
                    <input className="InputPesquisa" placeholder="Buscar no Twitter">   
                    
                    </input>
                    <BiSearch className='IconPesquisaB'/>
                </div>

                <div className='ContainerTopicos'>
                    <h3 className='TituloTopico'> O que está acontecendo</h3>
                    <h4 className='Noticia1'> Eleições 2022 · AO VIVO</h4>
                    <h4 className='Noticia11'> Eleição no Pernambuco: veja Tweets sobre a disputa de 2º turno entre Marília Arraes e Raquel Lyra</h4>
                    <img src='https://pbs.twimg.com/semantic_core_img/1576738438287613954/YDdyWSuA?format=jpg&name=240x240' alt='' className='ImgNoticia'></img>
                    <h4 className='Noticia2'>Assuntos do Momento</h4>
                    <h4 className='Noticia22'>Olinda <br />1.018 Tweets</h4>
                    <h4 className='Noticia3'>Guerra na Ucrânia · AO VIVO</h4>
                    <h4 className='Noticia33'>Guerra da Ucrânia: os Tweets sobre o conflito</h4>
                    <img src='https://pbs.twimg.com/semantic_core_img/1579454614277181440/b-ZGeQ4X?format=jpg&name=240x240' alt='' className='ImgGuerra'></img>
                </div>

                <div className='ContainerMensagens'> <h3 className='Mensagem1'> Mensagens</h3> 
                    <AiOutlineMessage className='IconsMessage1'/>
                    <HiChevronDoubleUp className='IconSeta'/>
                </div>
                </div>

              <div className='FEEDPRINCIPAL'>
                <div className='ContainerPost'>
                    <img src='https://scontent.frec1-2.fna.fbcdn.net/v/t1.6435-9/101847092_3001723589921921_8239884239001092096_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FVo9igQqe50AX9lloWW&_nc_ht=scontent.frec1-2.fna&oh=00_AT8rZey5yS2fyiL8wCyWkGtsEhKbCYLmeZ05iO2gAPfGGw&oe=636E5FAC' className='ImgPerfilHome'></img>
                    <input type='text' placeholder='O que esta acontecendo?' className='InputPost'></input>
                    <button className='BotãoTwt'>Tweetar</button>
                    <BsImageFill className='IconImg'/>
                    <AiOutlineFileGif className='IconGif'/>
                    <ImParagraphLeft className='IconEnquete' />
                    <BsFillEmojiSmileFill className='IconEmoji'/>
                    <BsCalendarDate className='IconCalendario' />
                    <BiLocationPlus className='IconLocal'/>
                </div>

                <div className='ContainerPostagemum'>
                    <ModeloPostTexto  NomePerfilPostagem="Mari" NomeDeUsuarioPostagem="@Mari_Amaior" MinPost="4min" TextoPostagem='eu sou a maior, entenda!' NumeroLikes ="1230" NumeroRetweet= "12mil" NumerosComentarios="1000"/>
                    <img src='https://pbs.twimg.com/profile_images/1543231201707790338/jILPrLQO_400x400.jpg' className='ImagemPost1'></img>
                </div>

                <div className='ContainerPostagemdois'>
                    <img src='https://pbs.twimg.com/profile_images/1555276104751058944/j0wF3Aaa_400x400.jpg'className='ImagemPerfilPost2'></img>
                    <ModeloPostTexto  NomePerfilPostagem="Leo" NomeDeUsuarioPostagem="@chatoDMS" MinPost="12h" TextoPostagem='Uma empresa do nível da blizzard não consegue manter um servidor de pé, vergonha' NumeroLikes="10" NumeroRetweet ="2" NumerosComentarios ="20"/>
                </div>

                <div className='PostIMGFEED'>
                    <img src='https://pbs.twimg.com/profile_images/1534280369159213070/cuTT4bFz_400x400.png' className='ImgPerfilPost3'></img>
                    <h4 className='NomePerfilPost3'>Oracle</h4>
                    <p className='NomePost3'>@oracledobrasil • </p> 
                    <p className='TempoPost3' > 2h</p>
                    <p className='TextoPost3'> O @leandromartins queria muito trabalhar na Oracle e nos contou isso quando marcou a gente em um post do  @LinkedinBrasil.
                        E, 3 meses depois, ele faz parte do nosso time!  😍Bem-vindo! </p>
                    <img src='https://pbs.twimg.com/media/FdBYVPuWIAMU13X?format=jpg&name=large' className='ImgPostFeed3'></img>
                    <p className='NumeroLikesPost3'>400</p>
                    <p className='NumeroRetweetPost3'>200</p>
                    <p className='NumeroComentariosPost3'>300</p>
        
                    <SiTheconversation className='ChatPost3'/>
                    <AiOutlineRetweet className='RepostPost3' />
                    <FcLike className='LikePost3'/>
                    <FiShare className='CompartilharPost3'/>
                    <BsThreeDots className='PontosPost3' />
                    </div> 
                    


                </div>
            </body>
        </div>
    )
}