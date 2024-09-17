
import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div className='block'>  
        	<Link to="/about">О Нас</Link> 
            <h1>Главная страница</h1>
            <h1>Инкут-насос</h1>
            <p>Производим насосы и другое бурильное оборудование с 1980 г</p>
        
        </div>
    );
}

export default HomePage;