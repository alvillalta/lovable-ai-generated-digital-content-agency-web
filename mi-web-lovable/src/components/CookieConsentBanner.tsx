import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "cookieConsentStatus";
const COOKIE_NAME = "cookie_consent";

const getStoredConsent = () => {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY);
};

const saveConsent = (value: "accepted" | "rejected") => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  document.cookie = `${COOKIE_NAME}=${value}; path=/; samesite=strict`;
};

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent === "accepted" || consent === "rejected") {
      setVisible(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setVisible(true);
    }, 750);

    return () => window.clearTimeout(timeout);
  }, []);

  const handleAccept = () => {
    saveConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    saveConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-border bg-background/95 p-5 shadow-xl shadow-black/10 backdrop-blur-xl md:inset-x-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Usamos cookies para mejorar tu experiencia.</p>
          <p className="text-sm text-muted-foreground">
            Al aceptar, nos autorizas a guardar una cookie con tu elección. Puedes consultar nuestra política legal en los enlaces del pie de página.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted/90"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
