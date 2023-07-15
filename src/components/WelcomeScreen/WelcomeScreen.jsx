import css from './WelcomeScreen.module.css';
import { useState } from 'react';

export const WelcomeScreen = ({ setQuestion }) => {
    const [start, setStart] = useState(false);

    const handleButtonClick = () => {
        setStart(true);
        setQuestion(1);
    }

    return (
        <>
        <section className={css.page}>
            <h1 className={start ? css.hiddenTitle : css.title}>"Your Perfect FiCTiON Pairing" Test</h1>
            <button 
                type='button' 
                className={start ? css.hiddenButton : css.button}
                onClick={handleButtonClick}
            >
                Shall we begin?
            </button>
        </section>
        </>
    )
}