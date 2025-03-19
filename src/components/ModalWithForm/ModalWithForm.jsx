import "./ModalWithForm.css";
import close from "../../assets/close.svg";

function ModalWithForm({
  children,
  title,
  name,
  buttonText,
  isOpen,
  handleCloseModal,
  onSubmit
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={handleCloseModal} type="button" className="modal__close">
          <img src={close} alt="Close button" />
        </button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;