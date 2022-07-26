import next from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Navbar = () => {
    return(
    <> <div className={styles.NavBar}>
    <div className={styles.NavLogo}>
    <Link href="/"><a><img src="/logo.png"></img></a></Link>
    </div>
    <div className={styles.NavLink}>
    <Link href="/track"><a >Tracks</a></Link>
    <Link href="/schedule"><a>Schedule</a></Link>
    <Link href="/prizes"><a>Prizes</a></Link>
    </div>
  </div></>

    );
    }

    export default Navbar;