"use client";

import { useEffect, useState } from "react";

type ConsentChoice = {
  analytics: boolean;
  advertising: boolean;
  updatedAt: number;
};

const STORAGE_KEY = "nordicmove-cookie-consent";
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  return window.gtag;
}

function applyConsent(choice: Pick<ConsentChoice, "analytics" | "advertising">) {
  const gtag = ensureGtag();

  gtag("consent", "update", {
    analytics_storage: choice.analytics ? "granted" : "denied",
    ad_storage: choice.advertising ? "granted" : "denied",
    ad_user_data: choice.advertising ? "granted" : "denied",
    ad_personalization: choice.advertising ? "granted" : "denied",
  });

  window.dataLayer.push({
    event: "consent_update",
    consent_analytics: choice.analytics,
    consent_advertising: choice.advertising,
  });
}

function saveConsent(choice: Pick<ConsentChoice, "analytics" | "advertising">) {
  const value: ConsentChoice = {
    ...choice,
    updatedAt: Date.now(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  applyConsent(value);
}

function loadConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const value = JSON.parse(raw) as ConsentChoice;

    if (
      typeof value.updatedAt !== "number" ||
      Date.now() - value.updatedAt > CONSENT_MAX_AGE_MS
    ) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return value;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    const saved = loadConsent();

    if (saved) {
      setAnalytics(saved.analytics);
      setAdvertising(saved.advertising);
      applyConsent(saved);
    } else {
      setShowBanner(true);
    }

    setReady(true);
  }, []);

  function acceptAll() {
    setAnalytics(true);
    setAdvertising(true);
    saveConsent({ analytics: true, advertising: true });
    setShowBanner(false);
    setShowSettings(false);
  }

  function rejectAll() {
    setAnalytics(false);
    setAdvertising(false);
    saveConsent({ analytics: false, advertising: false });
    setShowBanner(false);
    setShowSettings(false);
  }

  function savePreferences() {
    saveConsent({ analytics, advertising });
    setShowBanner(false);
    setShowSettings(false);
  }

  if (!ready) return null;

  return (
    <>
      {showBanner ? (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl rounded-[28px] border border-stone-200 bg-white p-6 shadow-2xl md:bottom-6 md:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b88948]">
                Privacy & cookies
              </p>

              <h2 className="mt-3 font-serif text-2xl text-[#173252] md:text-3xl">
                Choose how we may use cookies
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600">
                Necessary technologies keep the website working. With your
                permission, analytics help us understand website use and advertising
                technologies help us measure Google Ads and, where enabled,
                personalise advertising.
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-xs">
                <a
                  href="/privacy-policy"
                  className="font-medium text-[#173252] underline underline-offset-4"
                >
                  Privacy policy
                </a>
                <a
                  href="/cookie-policy"
                  className="font-medium text-[#173252] underline underline-offset-4"
                >
                  Cookie policy
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[470px]">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-[#173252] px-5 py-3 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
              >
                Reject all
              </button>

              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="rounded-full border border-[#173252] px-5 py-3 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
              >
                Manage
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full border border-[#173252] bg-[#173252] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Accept all
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {showSettings ? (
        <div
          className="fixed inset-0 z-[110] grid place-items-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="w-full max-w-2xl rounded-[30px] bg-white p-6 shadow-2xl md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b88948]">
              Cookie settings
            </p>

            <h2
              id="cookie-settings-title"
              className="mt-3 font-serif text-3xl text-[#173252]"
            >
              Manage your preferences
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Necessary technologies are always active. Analytics and advertising
              remain optional.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-start justify-between gap-6 rounded-[22px] bg-[#f6f1ea] p-5">
                <div>
                  <h3 className="font-medium text-[#173252]">Necessary</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Required for core website functions and consent storage.
                  </p>
                </div>
                <span className="rounded-full bg-stone-200 px-3 py-1 text-xs font-medium text-stone-600">
                  Always on
                </span>
              </div>

              <label className="flex cursor-pointer items-start justify-between gap-6 rounded-[22px] bg-[#f6f1ea] p-5">
                <div>
                  <h3 className="font-medium text-[#173252]">Analytics</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Allows analytics storage and measurement.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 h-5 w-5 accent-[#173252]"
                />
              </label>

              <label className="flex cursor-pointer items-start justify-between gap-6 rounded-[22px] bg-[#f6f1ea] p-5">
                <div>
                  <h3 className="font-medium text-[#173252]">Advertising</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Allows advertising storage, Google Ads measurement, advertising
                    user data and ad personalisation signals.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={advertising}
                  onChange={(event) => setAdvertising(event.target.checked)}
                  className="mt-1 h-5 w-5 accent-[#173252]"
                />
              </label>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-[#173252] px-5 py-3 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
              >
                Reject all
              </button>

              <button
                type="button"
                onClick={savePreferences}
                className="rounded-full border border-[#173252] px-5 py-3 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
              >
                Save choices
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full border border-[#173252] bg-[#173252] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {!showBanner && !showSettings ? (
        <button
          type="button"
          onClick={() => setShowSettings(true)}
          className="fixed bottom-3 left-3 z-[90] rounded-full border border-stone-300 bg-white/95 px-4 py-2 text-xs font-medium text-[#173252] shadow-sm backdrop-blur transition hover:bg-white"
        >
          Cookie settings
        </button>
      ) : null}
    </>
  );
}