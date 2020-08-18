import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const Home = () => {

  return (
    <>
      <Head><title>JLI | Timetable</title></Head>

      <div className={styles.header}>
          <p className={styles.title}>John Locke Institute</p>
          <p className={styles.tagLine}>2020 Timetable</p>
      </div>

      <div className={styles.group_nav}>
        <ul>
          <li>
            <Link href='/A/day1'><a>Group A</a></Link>
          </li>
          <li>
            <Link href='/B/day1'><a>Group B</a></Link>
          </li>
          <li>
            <Link href='/C/day1'><a>Group C</a></Link>
          </li>
          <li>
            <Link href='/D/day1'><a>Group D</a></Link>
          </li>
          <li>
            <Link href='/E/day1'><a>Group E</a></Link>
          </li>
          <li>
            <Link href='/F/day1'><a>Group F</a></Link>
          </li>
          <li>
            <Link href='/G/day1'><a>Group G</a></Link>
          </li>
          <li>
            <Link href='/H/day1'><a>Group H</a></Link>
          </li>
        </ul>
      </div>
    </>
  )
}

Home.page = 'index';

export default Home;