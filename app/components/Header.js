import styles from "../page.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Weather App</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/city/Seoul">Seoul</a>
                    </li>
                    <li>
                        <a href="/city/London">London</a> 
                    </li>
                    <li>
                        <a href="/city/Paris">Paris</a>
                    </li>
                    <li>
                        <a href="/city/Tokyo">Tokyo</a>
                    </li>
                </ul>
            </nav>


        </header>

    )
}