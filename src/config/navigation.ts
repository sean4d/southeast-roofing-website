/**
 * Navigation structure for header and footer. Reflects the full PRD sitemap
 * (docs/PRD.md §2) — routes for later phases resolve to the branded
 * "on the roadmap" 404 until their phase ships, keeping the information
 * architecture real from day one.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Metal Roofing", href: "/metal-roofing" },
  { label: "Commercial", href: "/commercial" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = {
  label: "Free Inspection",
  href: "/free-inspection",
};

export const commercialCta: NavLink = {
  label: "Request Consultation",
  href: "/commercial/request-consultation",
};

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Residential Services",
    links: [
      { label: "Residential Roofing", href: "/services/residential-roofing" },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "Roof Repair", href: "/services/roof-repair" },
      { label: "Storm Damage", href: "/services/storm-damage" },
      { label: "Insurance Claims", href: "/services/insurance-claims" },
      { label: "Emergency Roofing", href: "/services/emergency-roofing" },
      { label: "Shingle Roofing", href: "/services/shingle-roofing" },
      { label: "Roof Inspections", href: "/services/roof-inspections" },
      { label: "Gutters", href: "/services/gutters" },
    ],
  },
  {
    heading: "Commercial & Metal",
    links: [
      { label: "Commercial Roofing", href: "/commercial" },
      { label: "Commercial Replacement", href: "/commercial/roof-replacement" },
      { label: "Flat Roofing", href: "/commercial/flat-roofing" },
      { label: "Industries We Serve", href: "/commercial/industries" },
      { label: "Commercial Projects", href: "/commercial/projects" },
      { label: "Metal Roofing", href: "/metal-roofing" },
      { label: "Standing Seam", href: "/metal-roofing/standing-seam" },
      { label: "Metal Materials Guide", href: "/metal-roofing/materials" },
    ],
  },
  {
    heading: "Service Areas",
    links: [
      { label: "Hattiesburg", href: "/service-areas/hattiesburg" },
      { label: "Petal", href: "/service-areas/petal" },
      { label: "Laurel", href: "/service-areas/laurel" },
      { label: "Gulfport", href: "/service-areas/gulfport" },
      { label: "Biloxi", href: "/service-areas/biloxi" },
      { label: "Purvis", href: "/service-areas/purvis" },
      { label: "Columbia", href: "/service-areas/columbia" },
      { label: "Picayune", href: "/service-areas/picayune" },
      { label: "All Service Areas", href: "/service-areas" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Project Gallery", href: "/projects" },
      { label: "Reviews", href: "/reviews" },
      { label: "Financing", href: "/financing" },
      { label: "Learning Center", href: "/learn" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
