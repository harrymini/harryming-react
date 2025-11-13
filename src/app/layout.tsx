// src/app/layout.tsx
import '../shared/styles/util_pc.scss';
import '../shared/styles/layout-pc.scss';
import { ReactNode, Suspense } from 'react';
import Header from '@/widgets/layouts/Header/Header';
import Footer from '@/widgets/layouts/Footer';
import ThemeProvider from './providers/ThemeProvider';
import { SettingsProvider } from './providers/SettingsProvider';
import { AuthProvider } from './providers/AuthProvider';
// import { CommonProvider } from "./commonContext";

export const metadata = {
	title: 'Pulmuone FSD App',
	description: '풀무원 React FSD 구조',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body>
				<AuthProvider>
					<SettingsProvider>
						<ThemeProvider>
							<Header />
							<Suspense>
								<main style={{ minHeight: 'calc(100vh - 160px)' }}>
									{children} {/* 페이지 컨텐츠 */}
								</main>
							</Suspense>
							<Footer />
						</ThemeProvider>
					</SettingsProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
