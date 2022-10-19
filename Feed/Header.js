import { BrowserRouter as Router, Link} from 'react-router-dom';
import {BiHomeCircle} from 'react-icons/bi';
import {FiHash} from 'react-icons/fi';
import {BsBell} from 'react-icons/bs';
import {BiEnvelope} from 'react-icons/bi';
import {BsBookmark} from 'react-icons/bs';
import {CgNotes} from 'react-icons/cg';
import {BsFillPersonFill} from 'react-icons/bs';
import {CgMoreO} from 'react-icons/cg';
import {BsTwitter} from 'react-icons/bs';
import {BsStars} from 'react-icons/bs';
import './Header.css'

function Header(){
    return(
            <header className="Header">
                <div className="Header-div">
                    <ul className="Header-ul">
                        <li className="Header-li-logo"><Link className="Link-header" to="/"><BsTwitter/></Link></li>
                        <li className="Header-li"><Link className="Link-header" to="/Home"><BiHomeCircle/>Home</Link></li>
                        <li className="Header-li"><FiHash/>Explorar</li>
                        <li className="Header-li"><BsBell/>Notificações</li>
                        <li className="Header-li"><BiEnvelope/>Mensagens</li>
                        <li className="Header-li"><BsBookmark/>Favoritos</li>
                        <li className="Header-li"><CgNotes/>Listas</li>
                        <li className="Header-li"><Link className="Link-header" to="/Perfil"><BsFillPersonFill/>Perfil</Link></li>
                        <li className="Header-li"><CgMoreO/></li>
                    </ul>
                    <div className="Pag-div">
                        <div className="Home-fixa">
                            <h1>Página Inicial</h1>
                            <BsStars className='IconeStar'/>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header;