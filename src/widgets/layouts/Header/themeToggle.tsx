import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
	const { theme, setTheme } = useTheme();

	return (
		<label>
			<input
				type="checkbox"
				checked={theme === 'dark'}
				onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
			/>
			{theme === 'dark' ? '🌙 다크' : '☀️ 라이트'}
		</label>
	);
}
