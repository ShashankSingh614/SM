/**
 * Custom Hook for SEO Meta Tags
 * Install react-helmet-async: npm install react-helmet-async
 */

import { useEffect } from 'react';

export const useSEO = ({ title, description, keywords, canonical, ogImage, ogType = 'website', ogLocale = 'en_IN', twitterCard = 'summary_large_image', structuredData }) => {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
      updateMetaTag('property', 'og:url', canonical);
    }

    // Update Open Graph meta tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:locale', ogLocale);
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
    }

    // Update Twitter Card meta tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:card', twitterCard);
    if (ogImage) {
      updateMetaTag('name', 'twitter:image', ogImage);
    }

    // Add structured data (JSON-LD) with a dedicated script ID
    if (structuredData) {
      let scriptTag = document.head.querySelector('script#seo-json-ld');
      if (scriptTag) {
        scriptTag.remove();
      }
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'seo-json-ld';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title, description, keywords, canonical, ogImage, ogType, ogLocale, twitterCard, structuredData]);
};

/**
 * Helper function to update or create meta tags
 */
const updateMetaTag = (attr, name, content) => {
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

/**
 * Helper function to update or create name-based meta tags
 */
export const updateMetaTagByName = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.content = content;
};
