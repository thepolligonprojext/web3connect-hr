export default function Footer() {
  return (
    <footer className="global-foot">
      <div className="foot-wrap">
        <p className="foot-meta">&copy; 2026 Web3Connect HR | New York HQ | Global recruitment partner</p>
        <div className="footer-socials">
          <a
            className="footer-social-icon"
            href="https://www.linkedin.com/company/web3connecthr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web3Connect HR on LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
              <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 13.47c0-3.37-1.8-4.94-4.2-4.94a3.64 3.64 0 0 0-3.3 1.82h-.05V8.5H9.52V20h3.37v-5.7c0-1.5.28-2.96 2.14-2.96 1.83 0 1.86 1.7 1.86 3.06V20h3.55v-6.53Z" />
            </svg>
          </a>
          <a
            className="footer-social-icon"
            href="https://x.com/web3connecthr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web3Connect HR on X / Twitter"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.865l4.265 5.638 5.864-5.638Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
            </svg>
          </a>
          <a
            className="footer-social-icon"
            href="#"
            aria-label="Web3Connect HR on Telegram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
