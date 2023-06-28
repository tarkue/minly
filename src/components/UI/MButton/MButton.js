import s from './MButton.module.css'


/**
 * Стилизированная, настраиваемая кнопка
 *
 * 
 * @param {Function} onClick действие при нажатии.
 * @param {string} className класс для стилизации.
 */
export default function MButton({ onClick, className, children }) {
    return <button 
        className={[className, s.MButton].join(' ')} 
        onClick={onClick}
    >
        {children}
    </button>
}