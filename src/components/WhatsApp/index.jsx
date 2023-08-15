import styles from './WhatsApp.module.css'

export default function WhatsApp() {
    return (
        <a href="https://web.whatsapp.com/" target="_blank" rel='noreferrer'>
            <img src="/wsp-logo.png" alt="wsp" className={`${styles.whatsAppLogo}`} /></a>
            
    )
}