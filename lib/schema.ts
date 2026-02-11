
import { COMPANY_NAME, PHONE_NUMBER, TAGLINE } from '../constants';

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": COMPANY_NAME,
    "description": TAGLINE,
    "url": window.location.origin,
    "telephone": PHONE_NUMBER,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Quoz Industrial Area 3",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1328,
      "longitude": 55.2343
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "image": "https://images.unsplash.com/photo-1578131055535-71887e504c63?auto=format&fit=crop&q=80&w=800"
  };
};
