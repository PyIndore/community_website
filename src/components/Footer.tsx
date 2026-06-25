import Image from 'next/image';
import type { Site, SocialLink } from '@/lib/types';
import NewsletterForm from './NewsletterForm';
import { socialMeta } from './social-meta';

export default function Footer({ site, socials }: { site: Site; socials: SocialLink[] }) {
  const footerNav = site.nav.filter((n) => n.location === 'footer');
  const navLinks = footerNav.length ? footerNav : site.nav.filter((n) => n.location === 'header');
  const brandRest = site.brand.name.replace(/^py/i, '');

  return (
    <>
      <div className="gradient-divider" />
      <footer className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            {/* Brand column */}
            <div>
              <a href="#home" className="flex items-center gap-2.5 mb-5">
                <Image src={site.brand.logoUrl || '/logo.png'} alt={site.brand.name} width={22} height={28} className="object-contain logo-glow" />
                <span className="text-xl font-bold text-dark-text">
                  <span className="text-gradient-blue">Py</span>
                  {brandRest}
                </span>
              </a>
              <p className="text-dark-tertiary text-sm leading-relaxed max-w-xs mb-6">{site.footer.blurb}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {socials.map((s) => {
                  const { Icon } = socialMeta(s.platform);
                  return (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-xl liquid-glass flex items-center justify-center hover:border-dark-border-strong transition-all duration-200 glass-hover"
                    >
                      <Icon size={15} className="text-dark-muted" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <h4 className="text-dark-text font-semibold text-xs uppercase tracking-widest mb-5">Navigation</h4>
              <ul className="space-y-3.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-dark-tertiary hover:text-dark-muted text-sm transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h4 className="text-dark-text font-semibold text-xs uppercase tracking-widest mb-5">Resources</h4>
              <ul className="space-y-3.5">
                {site.footer.resourceLinks.map((resource) => (
                  <li key={resource.label}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-dark-tertiary hover:text-dark-muted text-sm transition-colors duration-200">
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter column */}
            <div>
              <h4 className="text-dark-text font-semibold text-xs uppercase tracking-widest mb-5">Newsletter</h4>
              <p className="text-dark-tertiary text-sm mb-5 leading-relaxed">{site.footer.newsletterCopy}</p>
              <NewsletterForm />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="gradient-divider my-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-tertiary text-xs">{site.footer.copyright}</p>
            <div className="text-dark-tertiary text-xs">{site.footer.madeWithText}</div>
            <div className="flex items-center gap-5">
              {site.footer.legalLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-dark-tertiary hover:text-dark-muted text-xs transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
