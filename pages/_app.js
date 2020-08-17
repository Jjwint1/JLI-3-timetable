import '../styles/globals.css'
import App from 'next/app';

import { AnimatePresence } from 'framer-motion';

import Layout from '../components/layout/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const page = Component.page;
    const group = Component.group;


    if (page === 'index') {
      return (
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps}/>
        </AnimatePresence>
      )
    } else {
      return (
        <Layout active={page} group={group}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps}/>
          </AnimatePresence>
        </Layout>
      )
    }
  }
}

export default MyApp
