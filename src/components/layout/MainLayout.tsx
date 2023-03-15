import Head from 'next/head'
import { ReactNode } from 'react'
import { Navbar } from '../Navbar'
import styles from './Main.module.css'

interface Props {
	children:ReactNode
}

export const MainLayout = ({ children }:Props) => {
	return (
		<>
			<Head>
				<title>Home Diego</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={styles.main}>
				{children}
			</main>
		</>
	)
}
