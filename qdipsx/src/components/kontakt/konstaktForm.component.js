import React, { useState } from 'react'
import '../../style/components/kontaktForm.css'

const formFromEndpoin = 'https://public.herotofu.com/v1/db72d270-1547-11ed-bc91-695741f28ee9';

const KontaktForm = () => {

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    }

    if (submitted) {
        return (
            <div>
                <h2>Dziękuję za wiadomość!</h2>
            </div>
        )
    }

    return (
        <div className='calyFormularz'>
            <form
                action={formFromEndpoin}
                onSubmit={handleSubmit}
                method="POST"
                target='_blank'
            >
                <div className='daneWejscioweFormularza'>
                    <div>
                        <input type={"text"} placeholder={"Twoje imie"} name={"imie"} required />
                    </div>
                    <div>
                        <input type={"email"} placeholder={"Podaj email"} name={"email"} required />
                    </div>
                    <div>
                        <textarea placeholder="Tutaj wpisz swoją wiadomość" name={"wiadomosc"} required />
                    </div>
                    <button type='submit'>Wyślij wiadomość</button>
                </div>
            </form>
        </div>
    )
}

export default KontaktForm