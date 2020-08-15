import styles from './Layout.module.scss'
import Link from 'next/link'

export default class Layout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        console.log(this.state.open);
        this.setState(
            {
                open: !this.state.open
            }
        )
    }

    render() {
        return (
            <>
        <div className={styles.header}>
            <p className={styles.title}>John Locke Institute</p>
            <p className={styles.tagLine}>2020 Timetable</p>
        </div>

        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href="/"><a id={this.props.active === 'day1' ? styles.active : ''}>Day 1</a></Link>
                </li>
                <li>
                    <Link href="/day2"><a id={this.props.active === 'day2' ? styles.active : ''}>Day 2</a></Link>
                </li>
                <li>
                    <Link href="/day3"><a id={this.props.active === 'day3' ? styles.active : ''}>Day 3</a></Link>
                </li>
                <li>
                    <Link href="/day4"><a id={this.props.active === 'day4' ? styles.active : ''}>Day 4</a></Link>
                </li>
                <li>
                    <Link href="/day5"><a id={this.props.active === 'day5' ? styles.active : ''}>Day 5</a></Link>
                </li>
                <li>
                    <Link href="/day6"><a id={this.props.active === 'day6' ? styles.active : ''}>Day 6</a></Link>
                </li>
                <li>
                    <Link href="/day7"><a id={this.props.active === 'day7' ? styles.active : ''}>Day 7</a></Link>
                </li>
                <li>
                    <Link href="/day8"><a id={this.props.active === 'day8' ? styles.active : ''}>Day 8</a></Link>
                </li>
                <li>
                    <Link href="/day9"><a id={this.props.active === 'day9' ? styles.active : ''}>Day 9</a></Link>
                </li>
                <li>
                    <Link href="/day10"><a id={this.props.active === 'day10' ? styles.active : ''}>Day 10</a></Link>
                </li>
            </ul>
        </div>

        <div className={styles.mobile_nav}>
            <button onClick={this.toggleMenu}>Select Day &gt;</button>
            <ul className={this.state.open ? styles.open : styles.closed}>
                <li onClick={this.toggleMenu}>
                    <Link href="/"><a id={this.props.active === 'day1' ? styles.active : ''}>Day 1</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day2"><a id={this.props.active === 'day2' ? styles.active : ''}>Day 2</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day3"><a id={this.props.active === 'day3' ? styles.active : ''}>Day 3</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day4"><a id={this.props.active === 'day4' ? styles.active : ''}>Day 4</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day5"><a id={this.props.active === 'day5' ? styles.active : ''}>Day 5</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day6"><a id={this.props.active === 'day6' ? styles.active : ''}>Day 6</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day7"><a id={this.props.active === 'day7' ? styles.active : ''}>Day 7</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day8"><a id={this.props.active === 'day8' ? styles.active : ''}>Day 8</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day9"><a id={this.props.active === 'day9' ? styles.active : ''}>Day 9</a></Link>
                </li>
                <li onClick={this.toggleMenu}>
                    <Link href="/day10"><a id={this.props.active === 'day10' ? styles.active : ''}>Day 10</a></Link>
                </li>
            </ul>
        </div>

        <div>
            {this.props.children}
        </div>
    </>
        )
    }
}