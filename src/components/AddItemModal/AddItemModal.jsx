import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function AddItemModal({ handleCloseModal, isOpen, onAddItemModalSubmit }) {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [weather, setWeather] = useState("");

   
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    }

    const handleWeatherChange = (e) => {
        setWeather(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItemModalSubmit({ name, imageUrl, weather });
        setName("")
        setImageUrl("")
        setWeather("")
    };

    return (
        <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        onSubmit={handleSubmit}
      >
        <label htmlFor='name' className='modal__label'>
          Name{" "}
          <input
            type="text"
            name="name"
            className="modal__input modal__input_type_card-name"
            id="name"
            placeholder="Name"
            required
            minLength="1"
            maxLength="30"
            onChange={handleNameChange}
            value={name}
          />
          {/* <span className="modal__error" id="place-name-error" /> */}
        </label>
        <label htmlFor='imageUrl' className='modal__label'>
          Image{" "}
          <input
            type="url"
            name="link"
            className="modal__input modal__input_type_url"
            id="imageUrl"
            placeholder="Image URL"
            required
            onChange={handleImageUrlChange}
            value={imageUrl}
          />
        </label>
        <fieldset className='modal__radio-btn'>
          <legend className='modal__legend'>Select the weather type:</legend>
          <label htmlFor='hot' className='modal__label modal__label_type_radio'>
            <input name='hot' id='hot' type="radio" className='modal__radio-input' value={'hot'} onChange={handleWeatherChange} checked={weather === 'hot'} /> Hot
          </label>
          <label htmlFor='warm' className='modal__label modal__label_type_radio'>
            <input name='hot' id='warm' type="radio" className='modal__radio-input' value={'warm'} onChange={handleWeatherChange} checked={weather === 'warm'} /> Warm
          </label> 
          <label htmlFor='cold' className='modal__label modal__label_type_radio'>
            <input name='hot' id='cold' type="radio" className='modal__radio-input' value={'cold'} onChange={handleWeatherChange} checked={weather === 'cold'} /> Cold
          </label>
        </fieldset>
      </ModalWithForm>
    )
}