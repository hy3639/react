function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow max-w-md w-full relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-black"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal;
  