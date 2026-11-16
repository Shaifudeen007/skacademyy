import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from './siteConfig';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  schemas?: Record<string, unknown>[];
}

export default function SEOHead({
  title = siteConfig.routes.home.title,
  description = siteConfig.routes.home.description,
  keywords = siteConfig.routes.home.keywords,
  canonical = siteConfig.baseUrl,
  ogType = 'website',
  ogImage = siteConfig.defaultOgImage,
  noindex = false,
  schemas = [],
}: SEOHeadProps) {
  const fullCanonicalUrl = canonical.startsWith('http') ? canonical : `${siteConfig.baseUrl}${canonical}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.baseUrl}${ogImage}`;
  const robotsDirective = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // Safeguard: direct document title update
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsDirective} />
      <meta name="googlebot" content={robotsDirective} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Local SEO & Geo Meta Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content={`${siteConfig.geo.latitude};${siteConfig.geo.longitude}`} />
      <meta name="ICBM" content={`${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data (JSON-LD) */}
      {schemas && schemas.length > 0 && schemas.map((schemaObj, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schemaObj)}
        </script>
      ))}
    </Helmet>
  );
}
