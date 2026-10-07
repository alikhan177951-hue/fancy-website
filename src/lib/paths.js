export const BASE = import.meta.env.BASE_URL || '/bobcatbob/';

export function asset(path) {
  const clean = String(path).replace(/^\//, '');
  return `${BASE}${clean}`;
}

export function telHref() {
  return 'tel:+61412026793';
}
