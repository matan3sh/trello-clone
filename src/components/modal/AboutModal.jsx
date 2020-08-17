import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AboutModal = ({ openModal, onClose }) => {
    return (
        <Modal
            isOpen={openModal}
            onRequestClose={() => onClose()}
            className={'about__modal'}
            overlayClassName={'about__overlay'}
        >
            <div className="aboutModal__container">
                <h1>This App Developed By</h1>
                <h3>Matan Shaviro</h3>
                <div className="aboutModal__social-media">
                    <a
                        href='https://www.linkedin.com/in/matan-shaviro-990b0272/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a
                        href='https://www.facebook.com/matan.shaviro/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-facebook-square'></i>
                    </a>
                </div>
            </div>
        </Modal>
    )
}

export default AboutModal
