import  {Modal} from 'sbm-modal';
import React, {useState} from 'react';
import 'sbm-modal/dist/index.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        title="My Modal"
        message="This is a modal dialog"
        buttonText="Close"
        isOpen={isOpen}
        titleStyle={{color: 'red'}}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;