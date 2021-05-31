import React from 'react';

export default function Footer () {
    return (
      <footer data-testid="footer" className="text-center ptb-2 footer">
        <b data-testid="copyright-info">{new Date().getFullYear()} helloDewa</b>
        <span data-testid="divider"> | </span>
        <ul data-testid="footer-links" id="footer-list">
          <li>
            <a className="footer-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="footer-link" href="/help">
              Help
            </a>
          </li>
          <li>
            <a className="footer-link" href="/become-a-host">
              Become a host
            </a>
          </li>
        </ul>
      </footer>
    );
};