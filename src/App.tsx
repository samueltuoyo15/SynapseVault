import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">SynapseVault</h1>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>Features</li>
            <li>How it works</li>
            <li>Pricing</li>
            <li>Docs</li>
            <li>Contact</li>
          </ul>
        </nav>

        <button className="cta-btn header-cta">
          Get Early Access <i className="fa-solid fa-arrow-right"></i>
        </button>
      </header>

      <main className="hero">
        <section className="hero-content">
          <div className="hero-text">
            <h2>What If Your Storage Could Think Ahead?</h2>

            <p>
              DeepKeep AI gives you encrypted, long-term storage that doesn’t
              forget, organizing your files with context-aware intelligence.
            </p>

            <button className="cta-btn hero-cta">
              Get Early Access <i className="fa-solid fa-arrow-right"></i>
            </button>

            <div className="hero-traingle">
              <img src="/traingle.svg" alt="traingle" />
            </div>
          </div>

          <div className="hero-image">
            <img src="/world.svg" alt="world visualization" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
