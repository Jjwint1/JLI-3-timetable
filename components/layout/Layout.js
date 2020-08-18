import styles from './Layout.module.scss'
import Link from 'next/link'
import Head from 'next/head'

export default class Layout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(
            {
                open: !this.state.open
            }
        )
    }

    render() {
        const group = this.props.group;
        const day = this.props.active;
        return (
            <>
            <Head><title>{'JLI' + ' | ' + day + ' | ' + 'Group ' + this.props.group}</title></Head>
        <div className={styles.header}>
            <p className={styles.title}><Link href='/'><a className={styles.title_link}>John Locke Institute</a></Link></p>
            <p className={styles.tagLine}>2020 Timetable</p>
        </div>

        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href={'/'+group+'/day1'}><a id={this.props.active === 'day1' ? styles.active : ''}>Day 1</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day2'}><a id={this.props.active === 'day2' ? styles.active : ''}>Day 2</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day3'}><a id={this.props.active === 'day3' ? styles.active : ''}>Day 3</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day4'}><a id={this.props.active === 'day4' ? styles.active : ''}>Day 4</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day5'}><a id={this.props.active === 'day5' ? styles.active : ''}>Day 5</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day6'}><a id={this.props.active === 'day6' ? styles.active : ''}>Day 6</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day7'}><a id={this.props.active === 'day7' ? styles.active : ''}>Day 7</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day8'}><a id={this.props.active === 'day8' ? styles.active : ''}>Day 8</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day9'}><a id={this.props.active === 'day9' ? styles.active : ''}>Day 9</a></Link>
                </li>
                <li>
                    <Link href={'/'+group+'/day10'}><a id={this.props.active === 'day10' ? styles.active : ''}>Day 10</a></Link>
                </li>
            </ul>
        </div>

        <div className={styles.mobile_nav}>
            <button onClick={this.toggleMenu}>Select Day &gt;</button>
            <ul className={this.state.open ? styles.open : styles.closed}>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day1'}><a id={this.props.active === 'day1' ? styles.active : ''}>Day 1</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day2'}><a id={this.props.active === 'day2' ? styles.active : ''}>Day 2</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day3'}><a id={this.props.active === 'day3' ? styles.active : ''}>Day 3</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day4'}><a id={this.props.active === 'day4' ? styles.active : ''}>Day 4</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day5'}><a id={this.props.active === 'day5' ? styles.active : ''}>Day 5</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day6'}><a id={this.props.active === 'day6' ? styles.active : ''}>Day 6</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day7'}><a id={this.props.active === 'day7' ? styles.active : ''}>Day 7</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day8'}><a id={this.props.active === 'day8' ? styles.active : ''}>Day 8</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day9'}><a id={this.props.active === 'day9' ? styles.active : ''}>Day 9</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href={'/'+group+'/day10'}><a id={this.props.active === 'day10' ? styles.active : ''}>Day 10</a></Link>
                </li>
            </ul>
        </div>

        <div className={styles.group}>
            GROUP {this.props.group}
        </div>

        <div>
            {this.props.children}
        </div>
    </>
        )
    }
}
