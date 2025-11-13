'use client';

import { useSettings } from '@/app/providers/SettingsProvider';
import ThemeToggle from '@/widgets/layouts/Header/ThemeToggle';
export default function Header() {
	const { settings } = useSettings();
	const { brand, headerType } = settings.layoutOptions;
	const { mallName, brand_list } = settings;

	// 활성화 클래스 유틸
	const isActive = (type) => (mallName === type ? 'active' : '');

	return (
		<header
			className={`fb__header ${brand} ${
				headerType === 'sub' ? 'fb__header--sub' : ''
			}`}
		>
			<div className="fb__header__inner">
				<section className="fb__header__content">
					<div className="fb__header__content__inner">
						<div className="fb__header__top">
							<h1 className="fb__header__logo">
								{/* 브랜드별 로고 */}
								{mallName === brand_list.ORGA ? (
									<a href="/orga" className="fb__header__logo__orga__active">
										<img
											src="/assets/pc/images/logo/active_orga_logo.svg"
											alt="올가"
											title="올가"
										/>
									</a>
								) : mallName === brand_list.GREENJUICE ? (
									<a
										href="/greenjuice"
										className="fb__header__logo__green__active"
									>
										<img
											src="/assets/pc/images/logo/greenjuice_logo.svg"
											alt="풀무원녹즙"
											title="풀무원녹즙"
										/>
									</a>
								) : (
									<a href="/">
										<img
											src="/assets/pc/images/logo/pulmuone-shop.svg"
											alt="풀무원"
											title="풀무원"
										/>
									</a>
								)}

								<div className="fb__header__mall-group">
									<a href="/" className={isActive(brand_list.PULMUONE)}>
										풀무원
									</a>
									<a href="/orga" className={isActive(brand_list.ORGA)}>
										올가
									</a>
									<a
										href="/greenjuice"
										className={isActive(brand_list.GREENJUICE)}
									>
										녹즙
									</a>
								</div>
							</h1>
							<ThemeToggle />
						</div>
					</div>
				</section>
			</div>
		</header>
	);
}
