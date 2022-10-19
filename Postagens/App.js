import './App.css';
import ModeloPostTextoTweets from './ComponentePropsPostTweets';



function App() {
  return (
    <div className="App">
      <body >
      <main className='MainTweets'>
        <ModeloPostTextoTweets 
        Avatar='https://scontent.frec1-2.fna.fbcdn.net/v/t1.6435-9/101847092_3001723589921921_8239884239001092096_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FVo9igQqe50AX9lloWW&_nc_ht=scontent.frec1-2.fna&oh=00_AT8rZey5yS2fyiL8wCyWkGtsEhKbCYLmeZ05iO2gAPfGGw&oe=636E5FAC' 
        NomePerfilPostagem='Instituto Proa' 
        NomeDeUsuarioPostagem='@instituto_proa' 
        MinPost='50 min'
        TextoPostagem='Quer estudar e trabalhar com programação? Essa é a sua oportunidade! Inscrições abertas para o curso de Programação do PROA'
        ImgPostagem='https://pbs.twimg.com/media/FfSOHcHWAAEDqdl?format=jpg&name=4096x4096'/>

        <ModeloPostTextoTweets 
        Avatar='https://scontent.frec1-2.fna.fbcdn.net/v/t1.6435-9/101847092_3001723589921921_8239884239001092096_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FVo9igQqe50AX9lloWW&_nc_ht=scontent.frec1-2.fna&oh=00_AT8rZey5yS2fyiL8wCyWkGtsEhKbCYLmeZ05iO2gAPfGGw&oe=636E5FAC' 
        NomePerfilPostagem='Instituto Proa' 
        NomeDeUsuarioPostagem='@instituto_Proa' 
        MinPost='14 de out'
        TextoPostagem='Sextou com #JovensEmpregados'
        ImgPostagem='https://pbs.twimg.com/media/FfSWyZbXgAINpSa?format=jpg&name=4096x4096'/>

        <ModeloPostTextoTweets
        Avatar='https://scontent.frec1-2.fna.fbcdn.net/v/t1.6435-9/101847092_3001723589921921_8239884239001092096_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FVo9igQqe50AX9lloWW&_nc_ht=scontent.frec1-2.fna&oh=00_AT8rZey5yS2fyiL8wCyWkGtsEhKbCYLmeZ05iO2gAPfGGw&oe=636E5FAC' 
        NomePerfilPostagem='Instituto Proa' 
        NomeDeUsuarioPostagem='@instituto_Proa' 
        MinPost='15 de out'
        TextoPostagem='O PROA TECH é um evento do PROPROFISSÃO que taz profissionais referências no mercado de tecnologia, para contarem um pouco sobre suas trajetórias, e a 1° edição do PROA TECH para as turmas desse semestre sera nesse sabado, 15/10.  '
        ImgPostagem='https://pbs.twimg.com/media/FfScGjcXoAMRwh5?format=jpg&name=4096x4096'
        />

        <ModeloPostTextoTweets 
        Avatar='https://scontent.frec1-2.fna.fbcdn.net/v/t1.6435-9/101847092_3001723589921921_8239884239001092096_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FVo9igQqe50AX9lloWW&_nc_ht=scontent.frec1-2.fna&oh=00_AT8rZey5yS2fyiL8wCyWkGtsEhKbCYLmeZ05iO2gAPfGGw&oe=636E5FAC' 
        NomePerfilPostagem='Instituto Proa' 
        NomeDeUsuarioPostagem='@instituto_Proa' 
        MinPost='16 de out'
        TextoPostagem='Alô, jovem paulista! Esse post é para você! Estão abertas as inscrições para a Plataforma PROA em SP! '
        ImgPostagem='https://pbs.twimg.com/media/FfScLu5XwAYWNqA?format=jpg&name=4096x4096'
        />
      </main>
      </body>
    </div>
  );
}

export default App;
