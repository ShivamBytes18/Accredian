import { CONTACT, NAV_LINKS } from "@/data/content";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./SocialIcons";

const SOCIAL_ICONS = [FacebookIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon];

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-slate-200 pb-10 sm:flex-row sm:items-center">
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-brand-blue">
              accredian
            </span>
            <p className="mt-0.5 text-[11px] font-medium text-brand-slate">
              credentials that matter
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIAL_ICONS.map((Icon, index) => (
                <a
                  key={CONTACT.socials[index]}
                  href="#"
                  aria-label={CONTACT.socials[index]}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <a
            href="#enquire"
            className="rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
          >
            Enquire Now
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-bold text-brand-ink">Accredian</h3>
            <ul className="space-y-2.5 text-sm text-brand-slate">
              <li>
                <a href="#home" className="hover:text-brand-blue">About</a>
              </li>
              <li>
                <a href="#home" className="hover:text-brand-blue">Blog</a>
              </li>
              <li>
                <a href="#home" className="hover:text-brand-blue">Why Accredian</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-brand-ink">Explore</h3>
            <ul className="space-y-2.5 text-sm text-brand-slate">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-blue">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-brand-ink">Contact Us</h3>
            <p className="text-sm text-brand-slate">
              Email us:{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-brand-blue hover:underline"
              >
                {CONTACT.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-brand-slate">
              Office Address: {CONTACT.address}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-xs text-brand-slate">
          © {new Date().getFullYear()} Accredian, a brand of FullStack Education
          Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
