import {BsThreeDots} from 'react-icons/bs'
import {SiTheconversation}from 'react-icons/si'
import {AiOutlineRetweet} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {FiShare} from 'react-icons/fi'
export default function ModeloPostTexto(props) {
    return (
        <div>
        
        <h4 className="NomePerfilPostagemStyle">{props.NomePerfilPostagem}</h4>
        <h4 className="NomeDeUsuarioPostagemStyle">{props.NomeDeUsuarioPostagem}&bull; </h4>
        <p className="MinutosPost">{props.MinPost}</p>
        <p className="TextoPostagem">{props.TextoPostagem}</p>
        <p className='NumeroLikes'>{props.NumeroLikes}</p>
        <p className='NumeroRetweet'>{props.NumeroRetweet}</p>
        <p className='NumeroComentarios'>{props.NumerosComentarios}</p>
        <BsThreeDots className='Mais'/>
        <SiTheconversation className='ConversaPostagem'/>
        <AiOutlineRetweet className='FaRetweet' />  
        <FcLike className='LikeIcon'/> 
        <FiShare className='ShareIcon' />
        

        </div>
    )
}