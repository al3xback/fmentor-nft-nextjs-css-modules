import { outfit } from '@/assets/fonts';
import '@/assets/css/reset.css';
import '@/assets/css/globals.css';

import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
	title: 'Frontend Mentor | NFT Preview Card Component | Next.js - CSS Modules',
	description: 'Frontend Mentor - NFT preview card component solution.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<Header />
				<main>
					<div className="container">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
