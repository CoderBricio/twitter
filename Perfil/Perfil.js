import "./PerfilHeader.css";
import PerfilHeader from "./PerfilHeader";
import Header from '../Feed/Header';
import App from '../Postagens/App'

function Perfil() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className="App-body">
        <PerfilHeader/>
      </main>
      <footer className="App-footer">
        <App/>
      </footer>
    </div>
  );
}

export default Perfil;
