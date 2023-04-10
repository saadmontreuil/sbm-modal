import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Modal from './Modal'

describe('Modal', () => {
  const title = 'Test Modal Title'
  const message = 'Test Modal Message'
  const buttonText = 'Test Button Text'
  const onClose = jest.fn()

  it('should be visible when isOpen is true', () => {
    const { getByText } = render(
      <Modal
        title={title}
        message={message}
        buttonText={buttonText}
        isOpen
        onClose={onClose}
      />
    )
    expect(getByText(title)).toBeVisible()
    expect(getByText(message)).toBeVisible()
    expect(getByText(buttonText)).toBeVisible()
  })

  it('should call onClose when close button is clicked', () => {
    const { getByText } = render(
      <Modal
        title={title}
        message={message}
        buttonText={buttonText}
        isOpen
        onClose={onClose}
      />
    )
    const closeButton = getByText('X')
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })

  it('should call onClose when confirm button is clicked', () => {
    const { getByText } = render(
      <Modal
        title={title}
        message={message}
        buttonText={buttonText}
        isOpen
        onClose={onClose}
      />
    )
    const confirmButton = getByText(buttonText)
    fireEvent.click(confirmButton)
    expect(onClose).toHaveBeenCalled()
  })
})
