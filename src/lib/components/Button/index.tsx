import React from 'react'
import './button.css'
import themes from '../../themes'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What primary color to use
   */
  primaryColor?: string
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * What text color to use
   */
  textColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * width of the button
   */
  width?: number | string
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  primaryColor = themes.kiwi.primary,
  backgroundColor = themes.kiwi.grey,
  textColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--normal'
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{
        flex: 1,
        backgroundColor: primary ? primaryColor : themes.kiwi.white,
        color: primary ? themes.kiwi.white : primaryColor
      }}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
