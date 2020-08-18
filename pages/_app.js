import '../styles/globals.css'
import App from 'next/app';

import { AnimatePresence } from 'framer-motion';

import Layout from '../components/layout/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const page = Component.page;
    const group = Component.group;
    var day;

    switch (page) {
      case 'day1': day = 'Day 1'; break;
      case 'day2': day = 'Day 2'; break;
      case 'day3': day = 'Day 3'; break;
      case 'day4': day = 'Day 4'; break;
      case 'day5': day = 'Day 5'; break;
      case 'day6': day = 'Day 6'; break;
      case 'day7': day = 'Day 7'; break;
      case 'day8': day = 'Day 8'; break;
      case 'day9': day = 'Day 9'; break;
      case 'day10': day = 'Day 10'; break;
    }


    if (page === 'index') {
      return (
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps}/>
        </AnimatePresence>
      )
    } else {
      return (
        <Layout active={page} group={group} day={day}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps}/>
          </AnimatePresence>
        </Layout>
      )
    }
  }
}

export default MyApp
