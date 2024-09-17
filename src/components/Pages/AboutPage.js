import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div className='block'>
            <Link to="/">На главную</Link>
            <h1>О нас</h1>
            <h2>Мы молодая и быстро развивающаяся компанию по продаже бурильных установок</h2>
            <p>Наша продукция себя зарекомендовала в 40 странах</p>
        </div>
    );
}

export default AboutPage;