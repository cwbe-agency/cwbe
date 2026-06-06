import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'CWBE — Professional Websites That Help Local Businesses Get Found, Trusted & Chosen',
  description: 'CWBE (Code With Belief) builds premium, conversion-focused websites for local businesses. See your homepage before paying — request a Free Homepage Prototype today.',
  keywords: ['web development', 'local business website', 'small business website India', 'construction website', 'restaurant website', 'clinic website', 'SEO', 'AI search ready', 'Siliguri web designer'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://cwbe.agency'),
  alternates: { canonical: '/' },
  authors: [{ name: 'Aryan — CWBE' }],
  creator: 'CWBE',
  icons: {
    icon: 'https://customer-assets.emergentagent.com/job_20c81801-4c47-4c6d-8845-d811d39d5e36/artifacts/fqd7wiql_favicon.ico',
    shortcut: 'https://customer-assets.emergentagent.com/job_20c81801-4c47-4c6d-8845-d811d39d5e36/artifacts/fqd7wiql_favicon.ico',
    apple: 'https://customer-assets.emergentagent.com/job_20c81801-4c47-4c6d-8845-d811d39d5e36/artifacts/3nozwh5m_icon.png',
  },
  openGraph: {
    title: 'CWBE — See Your Website Before Spending a Single Rupee',
    description: 'Premium websites for local businesses. Free homepage prototype. Mobile, SEO & AI-search ready.',
    url: '/',
    siteName: 'CWBE — Code With Belief',
    images: [{ url: 'https://customer-assets.emergentagent.com/job_20c81801-4c47-4c6d-8845-d811d39d5e36/artifacts/ymkg7wu6_primary_logo.png', width: 1200, height: 630, alt: 'CWBE — Code With Belief' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CWBE — See Your Website Before Spending a Single Rupee',
    description: 'Premium websites for local businesses. Free homepage prototype.',
    images: ['https://customer-assets.emergentagent.com/job_20c81801-4c47-4c6d-8845-d811d39d5e36/artifacts/ymkg7wu6_primary_logo.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#1E293B',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CWBE — Code With Belief',
  description: 'Premium web development for local businesses — websites that get found, trusted, and chosen.',
  url: 'https://cwbe.agency',
  logo: 'https://customer-assets.emergentagent.com/job_20c81801-4c47-4c6d-8845-d811d39d5e36/artifacts/ymkg7wu6_primary_logo.png',
  image: 'https://customer-assets.emergentagent.com/job_20c81801-4c47-4c6d-8845-d811d39d5e36/artifacts/ymkg7wu6_primary_logo.png',
  telephone: '+91-8927472571',
  email: 'cwbe.agency@gmail.com',
  founder: { '@type': 'Person', name: 'Aryan' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Siliguri',
    addressRegion: 'West Bengal',
    postalCode: '734012',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
  priceRange: '₹₹',
  sameAs: [],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}
