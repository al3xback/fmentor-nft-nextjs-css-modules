import Image from 'next/image';

import equilibriumImg from '@/assets/images/equilibrium.jpg';
import avatarImg from '@/assets/images/avatar.png';
import styles from './page.module.css';

export default function Home() {
	return (
		<article className={styles.card}>
			<div className={styles['card-image']}>
				<Image
					src={equilibriumImg}
					width="302"
					height="302"
					alt="Equilibrium"
					priority
				/>
			</div>
			<div className={styles['card-content']}>
				<h2 className={styles.title}>
					<a href="#" className="btn btn--link">
						Equilibrium #3429
					</a>
				</h2>
				<p className={styles.desc}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className={styles.stats}>
					<li>
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li>
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className={styles.author}>
					<Image
						src={avatarImg}
						width="33"
						height="33"
						alt="Jules Wyvern"
					/>
					<span>
						Creation of{' '}
						<a href="#" className="btn btn--link">
							Jules Wyvern
						</a>
					</span>
				</div>
			</div>
		</article>
	);
}
