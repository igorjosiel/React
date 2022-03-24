import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/react';

export function SignInButton() {
    const { data } = useSession();

    console.log('Foi: ', data);

    return data.session ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#84d361" />
            Igor Josiel
            <FiX color="#737388" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.SignInButton} onClick={() => signIn('github')}>
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    )
}