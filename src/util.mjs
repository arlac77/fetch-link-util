/**
 * Decodes link header and delivers one href entry.
 * @see https://datatracker.ietf.org/doc/html/rfc8288
 * @param {Headers} headers as given by fetch response
 * @param {string} rel of link to retrieve
 * @return {string|undefined} href for given rel
 */
export function getHeaderLink(headers, rel = "next") {
  return decodeHeader(headers.get("link"))[rel];
}

function decodeHeader(link) {
  return link
    ? Object.fromEntries(
        link.split(/\s*,\s*/).map(r => {
          const m = r.match(/<([^>]+)>;\s*rel="([^\"]+)"/);
          return m ? [m[2], m[1]] : [];
        })
      )
    : {};
}
