import React, {useState} from 'react';
import  {Modal} from 'sbm-modal';
import 'sbm-modal/dist/index.css';

const App = () => {

  // create my-custom-class
  const myCustomClass = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  };
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
        messageStyle={{fontStyle: 'italic'}}
        modalStyle={{backgroundColor: 'gray', width : '250px' }}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;