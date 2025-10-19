import {
  mdiAccountKey,
  mdiMonitorCellphone,
  mdiRocketLaunch,
  mdiServerNetwork,
  mdiShieldHalfFull,
  mdiShieldLock,
  mdiSync,
  mdiThemeLightDark,
  mdiWheelchair,
} from "@mdi/js"
import type { GridFeatureType } from "~/grid/GridFeatureType"

export const technicalFeatures = [
  {
    icon: mdiSync,
    title: "Real-time Collaboration",
    description:
      "Advantages of real-time collaboration include conflict-free editing and viewing, always seeing fresh and up-to-date information, ensuring data consistency and synchronization.",
  },
  {
    icon: mdiShieldHalfFull,
    title: "GDPR Compliant",
    description:
      "Strict EU data protection standards. No selling or arbitrary sharing of data with third parties. Clear data access through role and access rights.",
  },
  {
    icon: mdiMonitorCellphone,
    title: "Responsive Design",
    description:
      "Works smoothly on all screen sizes - desktop PC, smartphone, or tablet. High contrast design ensures good readability.",
  },
  {
    icon: mdiAccountKey,
    title: "Password-free Login",
    description:
      "Modern OAuth standards allow login with just 2-3 clicks. No passwords needed for a seamless user experience.",
  },
  {
    icon: mdiRocketLaunch,
    title: "Light and Performant",
    description:
      "Designed to load quickly and run smoothly, even on slow connections or regions with low-connectivity. Pages are kept simple and fast.",
  },
  {
    icon: mdiThemeLightDark,
    title: "Light and Dark Mode Support",
    description: "Switch seamlessly between light and dark themes to match your preference and reduce eye strain.",
  },
  {
    icon: mdiShieldLock,
    title: "Secure Data Handling",
    description:
      "Your data is protected in transit and at rest with industry-standard encryption and security measures.",
  },
  {
    icon: mdiServerNetwork,
    title: "Scalable Resource Storage",
    description:
      "Store and manage documents and resources with infinite scalability, ensuring availability and performance. Cached and served through CDN for lightning-fast access.",
  },
  {
    icon: mdiWheelchair,
    title: "WCAG 2.1 Compliant",
    description:
      "Meets Web Content Accessibility Guidelines 2.1 standards, ensuring the platform is accessible to users with disabilities.",
  },
] satisfies GridFeatureType[]
