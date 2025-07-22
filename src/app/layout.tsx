// src/app/layout.tsx
import "./globals.scss";
import { ReactNode } from "react";
import Header from "@/widgets/layouts/Header.tsx";
import Footer from "@/widgets/layouts/Footer.tsx";
// import { CommonProvider } from "./commonContext";

export const metadata = {
	title: "Pulmuone FSD App",
	description: "풀무원 React FSD 구조",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko">
			<body>
				{/* <CommonProvider> */}
				<Header />
				<main style={{ minHeight: "calc(100vh - 160px)" }}>
					{children} {/* 페이지 컨텐츠 */}
				</main>
				<Footer />
				{/* </CommonProvider> */}
			</body>
		</html>
	);
}
