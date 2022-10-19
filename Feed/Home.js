import Header from './Header';
import Posts from './PostFeed';
import './Home.css';

function Home(){
    return(
        <div className="Geral-home">
            <div className="Header-home">
                <Header/>
            </div>
            <div className="Feed-home">
                <Posts/>
            </div>
        </div>
    )
}

export default Home;