import { BiArrowBack } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BiBadgeCheck } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import capa from "../Imagens/capa.png";
import './PerfilHeader.css';

function PerfilHeader() {
  return (
    <body className="Body-Perfil">
      <section className="Section-acima">
        <div className="Barra-Perfil">
          <BiArrowBack
            style={{
              position: "absolute",
              left: "1.20%",
              right: "86.42%",
              top: "30%",
              bottom: "96.7%",
              color: "#ffffff",
            }}
          />
          <h2>
            Instituto Proa <BiBadgeCheck />{" "}
          </h2>
          <p>1.900 Tweets</p>
        </div>
        <img
          className="Banner-Header-Perfil"
          src={capa}
          alt="banner instituto proa"
        />
      </section>
      <section className="Section-embaixo">
        <div className="Botoes">
          <button className="ButtonEdit-Header2-Perfil">
            Editar Perfil
          </button>
          <button className="ButtonEdit2-Header2-Perfil">Tweet</button>
        </div>
        <img
          className="Avatar-Header-Perfil"
          src="https://scontent.frec1-2.fna.fbcdn.net/v/t1.6435-9/101847092_3001723589921921_8239884239001092096_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FVo9igQqe50AX9lloWW&_nc_ht=scontent.frec1-2.fna&oh=00_AT8rZey5yS2fyiL8wCyWkGtsEhKbCYLmeZ05iO2gAPfGGw&oe=636E5FAC"
          alt="avatar do proa"
        />
        <h2 style={{
          color: "white",
          width: '190px',
          height: '20px',
          marginLeft: '20px',
          marginTop: '-10px', 
          margin: '2',
          padding: '0',
      
        }} className="Name-Header2-Perfil">
          Instituto Proa <BiBadgeCheck />
        </h2>
        <p style={{
          color: '#7A7A7A',
          width: '190px',
          height: '20px',
          marginLeft: '-15px',
          marginTop: '15px',
          
          
        }} className="UserName-Header2-Perfil">@instituto.proa</p>
        <p style={{
          color: 'white',
          marginLeft: '20px',
          width: '683px',
          textAlign: 'left',
          marginTop: '9px'
        }} className="Description-Header2-Perfil">
          Organização não governamental (ONG) Criamos oportunidades de
          desenvolvimento pessoal e profissional para inserção de jovens
          no mercado formal de trabalho.
        </p>
        <div className="Section-Header2-Perfil-Nav">
          <ul>
            <li style={{ color: '#7A7A7A' }} className="CategoryProfessional-Header2-Perfil">
              <BiBriefcase /> Organização não governamental
            </li>
            <li style={{ color: '#7A7A7A' }} className="Localization-Header2-Perfil">
              <GoLocation /> São Paulo, Brasil
            </li>
            <li style={{ color: '#7A7A7A' }} className="LinkSite-Header2-Perfil">
              <BsLink45Deg /><a style={{ textDecoration: 'none', color: '#fffff' }} href="https://www.proa.org.br/" target="_blank">
                proa.orb.br
              </a>
            </li>
          </ul>
        </div>
        <p style={{ color: '#7A7A7A' }} className="Followers-Header2-Perfil">
          <ul>
            <li><strong style={{ color: 'white' }}>400</strong> Seguindo </li>
            <li><strong style={{ color: 'white' }}>44,9 mil</strong> Seguidores</li>
          </ul>
        </p>
        <div className="Section-Header3-Perfil-Nav">
          <ul>
            <li style={{ color: 'white' }} className="Tweets-Header3">Tweets</li>
            <li style={{ color: '#7A7A7A' }} className="Tweets-Respostas-Header3">Tweets e respostas</li>
            <li style={{ color: '#7A7A7A' }} className="Midia-Header3">Mídia</li>
            <li style={{ color: '#7A7A7A' }} className="Likes-Header3">Curtidas</li>
          </ul>
        </div>
      </section>
    </body>
  );
}
export default PerfilHeader;
