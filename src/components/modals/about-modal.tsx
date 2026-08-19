import { useEffect } from 'react';

type AboutItem = {
  image: string;
  name: string;
  text: string;
};

type AboutModalProps = {
  item: AboutItem;
  onClose: () => void;
};

export const AboutModal = ({ item, onClose }: AboutModalProps) => {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className="modal d-block bg-black bg-opacity-75" role="presentation" onClick={onClose}>
      <div
        className="modal-dialog modal-dialog-centered"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content bg-dark text-light border-secondary">
          <div className="modal-header border-secondary">
            <h2 id="about-modal-title" className="modal-title fs-3">{item.name}</h2>
            <button className="btn-close btn-close-white" type="button" aria-label="Close details" onClick={onClose} />
          </div>
          <div className="modal-body">
            <img className="w-100 rounded-2 object-fit-cover mb-3" src={item.image} alt="" />
            <p className="mb-0">{item.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
