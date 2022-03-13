import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#84d361" />
            Igor Josiel
            <FiX color="#737388" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.SignInButton}>
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    )
}