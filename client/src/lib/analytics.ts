// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics with GDPR compliance and idempotency
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Check consent before initializing
  const consent = localStorage.getItem('cookie-consent');
  if (consent !== 'accepted') {
    return;
  }

  // Idempotency guard - prevent duplicate GA initialization
  if (window.dataLayer?.length > 0 || document.querySelector(`script[src*="gtag/js?id=${measurementId}"]`)) {
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag with GDPR compliance
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=None;Secure',
      'allow_google_signals': false,
      'allow_ad_personalization_signals': false
    });
    gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'denied',
      'functionality_storage': 'granted',
      'personalization_storage': 'denied',
      'security_storage': 'granted'
    });
  `;
  document.head.appendChild(script2);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};