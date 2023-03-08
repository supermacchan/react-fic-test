import css from './WelcomeScreen.module.css';

export const WelcomeScreen = () => {
    return (
        <section className={css.page}>
            <h1 className={css.title}>"Your Perfect FiCTiON Pairing" Test</h1>
            <div className={css.btnContainer}>
                <button type='button' className={css.button}>Shall we begin?</button>
            </div>
        </section>
    )
}