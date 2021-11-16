import './card.css';
import { FaBeer } from 'react-icons/AiOutlineArrowRight';

function Card() {
    return (
        <div class="card w-1.5 h-1.5">
        <div>Picture</div>
        <div className="main">
            <h1>Elmedin Mustafic</h1>
            <button class="text-indigo-800">Detail</button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus beatae consequatur voluptatibus! Alias officia excepturi, iusto voluptates quos nisi molestias eveniet delectus non officiis repellat nemo similique blanditiis quam.</p>

    </div>
    );
}

export default Card;