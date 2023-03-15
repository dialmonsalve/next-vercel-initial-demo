import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function AboutPage() {

	return (

		<>
			<h1 className={styles.title}>
				Ir a <Link href="/">Home</Link>
			</h1>
			<p className={styles.description}>
				Get started by editing{' '};
				<code className={styles.code}>src/pages/about.jsx</code>
			</p>

		</>

	)
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayout>
			<DarkLayout>
				{page}
			</DarkLayout>
		</MainLayout>
	)
}



