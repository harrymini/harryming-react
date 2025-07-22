"use client";

import { useSettings } from "@/app/providers/SettingsProvider";

export default function Header() {
        const { settings } = useSettings();
        return (
                <header style={{ padding: "16px", background: "#f1f1f1" }}>
                        <h1>{settings.layoutOptions.title}</h1>
                </header>
        );
}
