import css from './WelcomeScreen.module.css';

export const WelcomeScreen = () => {
    return (
        <section className={css.page}>
            <h1 className={css.title}>Вітаємо!</h1>
            <p className={css.message}>Пропонуємо пройти тест "З ким із FiCTiON у тебе ідеальний пейринг?"</p>
            <div className={css.btnContainer}>
                <button type='button' className={css.button}>Почнемо?</button>
            </div>
        </section>
    )
}