import { site } from '../data/site.js';
import { asset, telHref } from '../lib/paths.js';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy">
      <div className="absolute inset-0 opacity-25">
        <img src={asset('images/gallery/footer1.jpg')} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <span className="inline-flex rounded-2xl bg-white p-1.5 ring-1 ring-black/10">
            <img src={asset('images/logo/logo-1.png')} alt="" className="h-10 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Locally owned and operated from Altona Meadows, Laverton &amp; Seabrook. Owner-operator David — bobcat and
            tipper hire for residential and commercial sites.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-display text-lg text-white">Call David</p>
          <a className="mt-2 block text-xl font-semibold text-yellow" href={telHref()}>
            {site.phoneDisplay}
          </a>
          <a className="mt-2 block text-foam hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="mt-2 text-mist">{site.address}</p>
          <p className="mt-1 text-mist">{site.hours}</p>
        </div>
        <div className="text-sm text-mist">
          <p className="font-display text-lg text-white">On site</p>
          <ul className="mt-3 space-y-1">
            <li>Site preparation → demolition → clean-up</li>
            <li>Tippers 2 t to 12 t 6-wheelers</li>
            <li>Western Melbourne · outer on request</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs text-mist">
        © {new Date().getFullYear()} {site.legal}. Rebuild hosted at kaamtasker.com/bobcatbob/. Source:{' '}
        dbbobcatandtipperhire.com.au
      </div>
    </footer>
  );
}
