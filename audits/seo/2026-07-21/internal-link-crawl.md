# Internal-link crawl — southeastroofing.llc

Crawl seed: all 113 sitemap URLs. Internal `href` targets extracted, normalized to the
canonical apex, deduplicated, then each unique target requested (no-follow) for status.

## Summary

| Metric | Result |
|---|---:|
| Unique internal link targets | 121 |
| Targets returning 200 | 120 |
| Targets returning non-200 | 1 |
| Links to non-canonical host (www/roofs.ms/http) | 0 |
| Orphaned sitemap pages (never linked internally) | 0 |

## Non-200 internal targets (with a source page)

| Status | Target | Linked from | Note |
|---|---|---|---|
| 000 | https://southeastroofing.llc/commercial | https://southeastroofing.llc/ | curl code 000 = transient timeout; re-verified 200 live (see note) |

> Note: the single `000` (`/commercial`) was a transient curl connection timeout during the
> concurrent crawl, not a broken link. A direct follow-up request returned **HTTP 200**.

## Links to non-canonical host

_None — every internal link uses the canonical apex host or a relative path._

## Orphaned sitemap pages

_None — every sitemap URL is reachable via at least one internal link._

## Full internal target status list

```
STATUS	HOST	URL
000	southeastroofing.llc	https://southeastroofing.llc/commercial
200	southeastroofing.llc	https://southeastroofing.llc
200	southeastroofing.llc	https://southeastroofing.llc/
200	southeastroofing.llc	https://southeastroofing.llc/_next/static/chunks/259r7dee096fs.css
200	southeastroofing.llc	https://southeastroofing.llc/_next/static/chunks/37v5ulr6qjozi.js
200	southeastroofing.llc	https://southeastroofing.llc/_next/static/media/75affa71d1e2f6a7-s.p.17-aodiw50953.woff2
200	southeastroofing.llc	https://southeastroofing.llc/_next/static/media/83afe278b6a6bb3c-s.p.2bn3s6zvc0dyp.woff2
200	southeastroofing.llc	https://southeastroofing.llc/about
200	southeastroofing.llc	https://southeastroofing.llc/anatomy-of-a-roof
200	southeastroofing.llc	https://southeastroofing.llc/blog
200	southeastroofing.llc	https://southeastroofing.llc/blog/new-website-real-photos-real-proposals
200	southeastroofing.llc	https://southeastroofing.llc/careers
200	southeastroofing.llc	https://southeastroofing.llc/commercial/epdm
200	southeastroofing.llc	https://southeastroofing.llc/commercial/industries
200	southeastroofing.llc	https://southeastroofing.llc/commercial/industries/apartments
200	southeastroofing.llc	https://southeastroofing.llc/commercial/industries/churches
200	southeastroofing.llc	https://southeastroofing.llc/commercial/industries/industrial
200	southeastroofing.llc	https://southeastroofing.llc/commercial/industries/municipal
200	southeastroofing.llc	https://southeastroofing.llc/commercial/industries/schools
200	southeastroofing.llc	https://southeastroofing.llc/commercial/industries/warehouses
200	southeastroofing.llc	https://southeastroofing.llc/commercial/metal-roofing
200	southeastroofing.llc	https://southeastroofing.llc/commercial/metal-roofing/pbr-panel
200	southeastroofing.llc	https://southeastroofing.llc/commercial/metal-roofing/r-panel
200	southeastroofing.llc	https://southeastroofing.llc/commercial/metal-roofing/standing-seam
200	southeastroofing.llc	https://southeastroofing.llc/commercial/metal-roofing/structural-metal
200	southeastroofing.llc	https://southeastroofing.llc/commercial/modified-bitumen
200	southeastroofing.llc	https://southeastroofing.llc/commercial/pvc
200	southeastroofing.llc	https://southeastroofing.llc/commercial/request-consultation
200	southeastroofing.llc	https://southeastroofing.llc/commercial/roof-coatings
200	southeastroofing.llc	https://southeastroofing.llc/commercial/roof-maintenance
200	southeastroofing.llc	https://southeastroofing.llc/commercial/roof-repair
200	southeastroofing.llc	https://southeastroofing.llc/commercial/roof-replacement
200	southeastroofing.llc	https://southeastroofing.llc/commercial/tpo
200	southeastroofing.llc	https://southeastroofing.llc/contact
200	southeastroofing.llc	https://southeastroofing.llc/financing
200	southeastroofing.llc	https://southeastroofing.llc/free-inspection
200	southeastroofing.llc	https://southeastroofing.llc/images/anatomy/roof-ridge-cap-shingles.webp
200	southeastroofing.llc	https://southeastroofing.llc/images/projects/gaf-timberline-hdz-pewter-gray-poplarville-ms.webp
200	southeastroofing.llc	https://southeastroofing.llc/learn
200	southeastroofing.llc	https://southeastroofing.llc/learn/commercial/commercial-roof-replacement-guide
200	southeastroofing.llc	https://southeastroofing.llc/learn/commercial/tpo-epdm-coatings-flat-roof-guide
200	southeastroofing.llc	https://southeastroofing.llc/learn/cost-guides/roof-financing-options-mississippi
200	southeastroofing.llc	https://southeastroofing.llc/learn/cost-guides/roof-replacement-cost-south-mississippi
200	southeastroofing.llc	https://southeastroofing.llc/learn/hiring/how-to-choose-a-roofing-contractor
200	southeastroofing.llc	https://southeastroofing.llc/learn/insurance-claims/how-roof-insurance-claims-work-mississippi
200	southeastroofing.llc	https://southeastroofing.llc/learn/maintenance/how-long-does-a-roof-last
200	southeastroofing.llc	https://southeastroofing.llc/learn/maintenance/roof-repair-vs-replacement
200	southeastroofing.llc	https://southeastroofing.llc/learn/maintenance/signs-you-need-a-new-roof
200	southeastroofing.llc	https://southeastroofing.llc/learn/maintenance/ten-minute-roof-check
200	southeastroofing.llc	https://southeastroofing.llc/learn/materials/architectural-vs-3-tab-shingles
200	southeastroofing.llc	https://southeastroofing.llc/learn/materials/metal-vs-asphalt-shingle-roofing
200	southeastroofing.llc	https://southeastroofing.llc/learn/materials/parts-of-a-roof-explained
200	southeastroofing.llc	https://southeastroofing.llc/learn/metal-roofing/standing-seam-vs-exposed-fastener
200	southeastroofing.llc	https://southeastroofing.llc/learn/storm-prep/hurricane-season-roof-checklist
200	southeastroofing.llc	https://southeastroofing.llc/learn/storm-prep/what-to-do-after-storm-damage
200	southeastroofing.llc	https://southeastroofing.llc/manifest.webmanifest
200	southeastroofing.llc	https://southeastroofing.llc/metal-roofing
200	southeastroofing.llc	https://southeastroofing.llc/privacy-policy
200	southeastroofing.llc	https://southeastroofing.llc/project-map
200	southeastroofing.llc	https://southeastroofing.llc/projects
200	southeastroofing.llc	https://southeastroofing.llc/projects/29ga-gibraltar-rib-metal-roof-in-burgundy-hattiesburg-ms-tajr
200	southeastroofing.llc	https://southeastroofing.llc/projects/gaf-timberline-hdz-shingle-roof-in-hickory-hattiesburg-ms-mder
200	southeastroofing.llc	https://southeastroofing.llc/projects/seamless-6-k-style-gutters-in-musket-brown-petal-ms-an5u
200	southeastroofing.llc	https://southeastroofing.llc/quote
200	southeastroofing.llc	https://southeastroofing.llc/residential
200	southeastroofing.llc	https://southeastroofing.llc/residential/asphalt-shingle-roofing
200	southeastroofing.llc	https://southeastroofing.llc/residential/fascia
200	southeastroofing.llc	https://southeastroofing.llc/residential/gutters
200	southeastroofing.llc	https://southeastroofing.llc/residential/leaf-guard
200	southeastroofing.llc	https://southeastroofing.llc/residential/metal-roofing
200	southeastroofing.llc	https://southeastroofing.llc/residential/metal-roofing/exposed-fastener
200	southeastroofing.llc	https://southeastroofing.llc/residential/metal-roofing/standing-seam
200	southeastroofing.llc	https://southeastroofing.llc/residential/roof-repair
200	southeastroofing.llc	https://southeastroofing.llc/residential/roof-replacement
200	southeastroofing.llc	https://southeastroofing.llc/residential/soffit
200	southeastroofing.llc	https://southeastroofing.llc/residential/ventilation
200	southeastroofing.llc	https://southeastroofing.llc/reviews
200	southeastroofing.llc	https://southeastroofing.llc/roof-assistant
200	southeastroofing.llc	https://southeastroofing.llc/roof-color-visualizer
200	southeastroofing.llc	https://southeastroofing.llc/roof-cost-calculator
200	southeastroofing.llc	https://southeastroofing.llc/roof-damage-analyzer
200	southeastroofing.llc	https://southeastroofing.llc/service-areas
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/bay-st-louis
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/biloxi
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/brookhaven
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/collins
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/columbia
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/crystal-springs
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/d-iberville
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/diamondhead
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/ellisville
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/gulfport
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/hattiesburg
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/jackson
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/kiln
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/laurel
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/long-beach
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/lucedale
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/mccomb
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/mchenry
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/meridian
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/moss-point
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/ocean-springs
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/pascagoula
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/pass-christian
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/petal
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/picayune
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/poplarville
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/purvis
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/richton
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/saucier
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/seminary
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/sumrall
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/waynesboro
200	southeastroofing.llc	https://southeastroofing.llc/service-areas/wiggins
200	southeastroofing.llc	https://southeastroofing.llc/storm-center
200	southeastroofing.llc	https://southeastroofing.llc/storm-damage
200	southeastroofing.llc	https://southeastroofing.llc/storm-damage/emergency-roofing
200	southeastroofing.llc	https://southeastroofing.llc/storm-damage/insurance-claims
200	southeastroofing.llc	https://southeastroofing.llc/storm-damage/insurance-claims/wizard
200	southeastroofing.llc	https://southeastroofing.llc/terms-of-service
```
