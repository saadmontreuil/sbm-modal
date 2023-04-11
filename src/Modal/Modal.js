import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css'

/**
 * A modal component that displays a title, message, and a confirm button
 *
 * @component
 * @param {object} props - The props object
 * @param {string} props.title - The title of the modal
 * @param {string} props.message - The message to be displayed inside the modal
 * @param {string} props.buttonText - The text to be displayed on the confirm button
 * @param {boolean} props.isOpen - Determines whether the modal is visible or not
 * @param {function} props.onClose - The function to be called when the modal is closed
 * @param {object} [props.titleStyle] - The styles to be applied to the title
 * @param {object} [props.messageStyle] - The styles to be applied to the message
 * @param {string} [props.buttonStyle] - The additional classes to be applied to the confirm button
 * @param {object} [props.modalStyle] - The styles to be applied to the modal
 * @returns {JSX.Element} - The modal component
 *
 * @example
 * // Basic usage
 * <Modal
 *   title="Modal Title"
 *   message="Modal message goes here"
 *   buttonText="Confirm"
 *   isOpen={true}
 *   onClose={() => setIsOpen(false)}
 * />
 *
 * @example
 * // Usage with styles
 * <Modal
 *   title="Styled Modal"
 *   message="Styled message"
 *   buttonText="Confirm"
 *   isOpen={true}
 *   onClose={() => setIsOpen(false)}
 *   titleStyle={{ color: 'red', fontSize: '24px' }}
 *   messageStyle={{ fontStyle: 'italic' }}
 *   buttonStyle="my-custom-class"
 *   modalStyle={{ backgroundColor: 'gray' }}
 * />
 */

export default function Modal({
  title,
  message,
  buttonText,
  isOpen,
  onClose,
  titleStyle,
  messageStyle,
  buttonStyle,
  modalStyle
}) {
  return (
    <div
      className={`${styles.modal} ${isOpen ? styles.open : ''}`}
      style={modalStyle}
    >
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']} style={titleStyle}>
          <h2>{title}</h2>
          <button
            type='button'
            className={styles['close-button']}
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className={styles['modal-body']} style={messageStyle}>
          <p>{message}</p>
        </div>
        <div className={styles['modal-footer']}>
          <button
            type='button'
            className={`${styles['confirm-button']} ${buttonStyle}`}
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  titleStyle: {},
  messageStyle: {},
  buttonStyle: '',
  modalStyle: {}
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  titleStyle: PropTypes.object,
  messageStyle: PropTypes.object,
  buttonStyle: PropTypes.string,
  modalStyle: PropTypes.object
}
