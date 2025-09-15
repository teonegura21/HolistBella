import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function SEO({ 
  title = "Holist Bella - Centrul de Sănătate Holistică din Iași",
  description = "Descoperă puterea vindecării naturale prin terapii holiste moderne. Terapie Bowen, Biorezonanță, Reiki, Apa Kangen și multe altele. Programează consultația ta astăzi!",
  keywords = "medicina holistica, terapie bowen, biorezonanța, reiki, apa kangen, nutritie celulara, iasi, angelica negura, detoxifiere, wellness, sanatate naturala",
  image = "https://holistbella.ro/og-image.jpg",
  url = "https://holistbella.ro",
  type = "website",
  noindex = false
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) ||
                   document.querySelector(`meta[name="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('og:locale', 'ro_RO');
    updateMetaTag('og:site_name', 'Holist Bella');
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', url);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type, noindex]);

  return null;
}