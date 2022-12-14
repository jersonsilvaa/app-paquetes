import React from 'react'

import './styles.scss'

const ContactUs = () => {
    return <>
        <br />
        <form action='https://formsubmit.co/jerson.silva99@hotmail.com' method='post' className='Form'>

            <div className='form__container'>
                <h2 className='form__title'>Contáctanos</h2>

                <div className='form__group'>
                    <input type='text' name='Nombres' placeholder=' ' className='form__input' required />
                    <label for='name' className='form__label'>Nombres</label>
                    <span className='form__line' />
                </div>

                <div className='form__group'>
                    <input type='email' name='Correo' placeholder=' ' className='form__input' required />
                    <label for='email' className='form__label'>Correo</label>
                    <span className='form__line' />
                </div>

                <div className='form__group'>
                    <textarea name='Mensaje' cols='30' rows='5' className='form__input' required />
                    <label for='message' className='form__label'>Mensaje</label>
                    <span className='form__line' />
                </div>

                <div className='profile__buttons'>
                    <input type='submit' className='button form__submit' value='        Enviar        ' />
                </div>
            </div>
        </form>
        <br />
    </>
}

export default ContactUs