import React, { type CSSProperties } from 'react'
import themes, { type ThemeName } from '../../themes'
import Button from '../Button'

export interface ButtonData {
  label: string
  onClick: () => void
}

export interface ModalProps {
  buttons?: ButtonData[]
  title?: string
  content?: string
  onClose?: () => void
  theme?: ThemeName
}

const Modal: React.FC<ModalProps> = ({
  buttons,
  title,
  content,
  onClose,
  theme = 'kiwi'
}) => {
  const { light, primary, grey, white } = themes?.[theme]

  const backgroundColor = light

  const styles: Record<string, CSSProperties> = {
    box: {
      position: 'absolute',
      width: 400,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    modal: {
      display: 'flex',
      flex: 1,
      width: 400,
      height: '100%',
      backgroundColor,
      borderRadius: 30,
      padding: 24
    },
    header: {
      marginBottom: 14
    },
    title: {
      alignSelf: 'stretch',
      color: primary,
      fontFamily: 'Inter',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '28px /* 155.556% */'
    },
    body: {
      alignSelf: 'stretch',
      color: grey,
      fontFamily: 'Inter',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '20px /* 142.857% */'
    },
    contentBox: {
      position: 'relative',
      width: '100%',
      height: '100%',
      flex: 1,
      textAlign: 'left'
    },
    footerBox: {
      display: 'flex',
      flex: 1,
      paddingTop: 14
    },
    closeIcon: {
      position: 'absolute',
      top: -9,
      right: 0,
      cursor: 'pointer',
      color: primary,
      fontSize: '18pt'
    },
    button: {
      cursor: 'pointer',
      flexGrow: 1,
      flexShrink: 0,
      textAlign: 'center'
    }
  }

  return (
    <div style={styles.box} className="box">
      <div style={styles.modal} className="modal">
        <div className="modal-content" style={styles.contentBox}>
          <div style={styles.closeIcon} className="close" onClick={onClose}>
            &times;
          </div>
          <div style={styles.header} className="modal-header">
            <div style={styles.title}>{title}</div>
          </div>
          <div style={styles.body} className="modal-body">
            {content}
          </div>
          <div className="modal-footer" style={styles.footerBox}>
            {buttons?.map(({ label, onClick }, index) => (
              <div
                style={{
                  // marginLeft: index === 0 ? 0 : 10,
                  ...styles.button
                }}
                key={label}
                onClick={onClick}
              >
                <Button label={label} onClick={onClick} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
