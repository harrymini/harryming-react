"use client";

import { useSettings } from "@/app/providers/SettingsProvider";

export default function Footer() {
  const { settings } = useSettings();
  return (
    <footer style={{ padding: '16px', background: '#e0e0e0' }}>
      <p>© 2025 {settings.mallName}. All rights reserved.</p>
    </footer>
  )
}
