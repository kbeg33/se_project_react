import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
// import ItemCard from "../ItemCard/ItemCard";


function ClothesSection({ }) {
    return (
    <div className="clothes-section">
        <div>
            <p className="">Your items</p>
            <button>Add</button>
        </div>
        <ul className="cards__list">
                    {defaultClothingItems.map((item) => (
                        <ItemCard key={item._id} item={item} onCardClick={handleCardClick} />
                    ))}
                </ul>
    </div>
    );
}

export default ClothesSection;