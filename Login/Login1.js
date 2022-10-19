import { BrowserRouter as Router, Link} from 'react-router-dom';
import './Styles.css';
import { FcGoogle } from 'react-icons/fc'
import{BsApple}from'react-icons/bs'
import Feed from'../Feed/Home';


function Login1(){
    return(
        <div className="container">
          <div className="container-login">
            <div className="wrap-login">
              <form className="login-form">
              <span className="login-form-title">
                <img src="https://pngimg.com/uploads/twitter/twitter_PNG15.png" alt="Logo de passáro"/>
              </span>
              <span className="login-form-title">Entrar no Twitter</span>
            
              <div className="google-login-form-btn">
                <button className="google-form-btn"><FcGoogle/> Fazer login com o Google</button>
              </div>
              
              <div className="apple-login-form-btn">
                <button className="apple-form-btn"> <BsApple/>Entrar com Apple</button>
              </div>
              <h5 className="ou">ou</h5>
              <div className="wrap-input">
                <input className="input" type="text" placeholder="Celular, e-mail ou nome de usuário"/>
              </div>

              <div className="container-login-form-btn">
                <Link className="Login-link" to="/Home"><button className="login-form-btn">Avançar</button></Link>
                <button className="senha-form-btn">Esqueçeu sua senha?</button>
              </div>
              <div className="texte-center">
              <span className="txt1">Não tem uma conta?</span>
              <a className="txt2" href="#">Inscreva-se</a>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
    
} 
export default Login1