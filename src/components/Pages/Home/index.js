import styles from './Home.module.css';
import HomeContato from './HomeContato';
import HomeMain1 from './HomeMain1';
import HomeMain2 from './HomeMain2';
import HomeMain3 from './HomeMain3';

export default function Home() {
    return(
        <main>
            <HomeMain1 />
            <HomeMain2 />
            <HomeMain3 />
            <HomeContato />
        </main>
    );
}