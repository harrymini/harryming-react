'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { APP_SETTINGS } from '@/shared/config/settings.config';

export type Settings = typeof APP_SETTINGS;

interface SettingsContextValue {
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
}

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

function getDeviceClass() {
  if (typeof window === "undefined") return ""; // SSR일 때 빈값

  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) return "mobile android";
  if (/iphone|ipad|ipod/.test(ua)) return "mobile ios";
  if (/mobile/.test(ua)) return "mobile";
  return "desktop";
}

function useHtmlDeviceClass() {
  useEffect(() => {
    const html = document.documentElement;
    const deviceClass = getDeviceClass();

    // 기존 클래스에 추가 (또는 교체)
    html.classList.remove("desktop", "mobile", "mobile-android", "mobile-ios");
    if (deviceClass) html.classList.add(deviceClass);
  }, []);
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(APP_SETTINGS);

  const updateSettings = (updates: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  useHtmlDeviceClass(); 

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
}
