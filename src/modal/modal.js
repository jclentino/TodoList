import { createPortal } from 'react-dom'
import '../styles/modal.css'

const Modal = ({ children })=> {
    return createPortal(
        <div className='modalContainer'>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }
