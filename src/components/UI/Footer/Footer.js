import s from './Footer.module.css'


export default function Footer({ children }) {

    return (
        <footer className={s.footer}>
            {children}
        </footer>
    )
}
