import {BsThreeDots} from 'react-icons/bs'
import {SiTheconversation}from 'react-icons/si'
import {AiOutlineRetweet} from 'react-icons/ai'
import {FiShare} from 'react-icons/fi'
import {AiOutlineHeart} from "react-icons/ai"
import { BsPatchCheckFill } from "react-icons/bs"
import {FiBarChart2} from 'react-icons/fi'
import '../App.css'
export default function ModeloPostTextoTweets(props) {
    return (
        <div className='ModeloTweets'>
            <img className='ImagemAvatarUsuario' src={props.Avatar}/>
            <h4 className="NomePerfilPostagem">{props.NomePerfilPostagem}</h4>
            <BsPatchCheckFill className='VerificadoDoTwitter'/>
            <p className="NomeDeUsuarioPostagem">{props.NomeDeUsuarioPostagem} </p>
            <span className='Ponto'>&bull;</span>
            <p className="MinutosPostagem">{props.MinPost}</p>
            <BsThreeDots className='MaisPerfil'/>
            <p className="TextoPostagemPerfil">{props.TextoPostagem}</p>
            <img className='ImagemPostagem' src={props.ImgPostagem}/>
            <SiTheconversation className='ConversaPostagemPerfil'/>
            <AiOutlineRetweet className='FaRetweetPerfil' />  
            <AiOutlineHeart className='LikeIconPerfil'/> 
            <FiShare className='ShareIconPerfil' />
            <FiBarChart2 className="FiEstatisticaPerfil"/>

        </div>
    )
}