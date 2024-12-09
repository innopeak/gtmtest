'use client'; // Mark this component as a client component

import { useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
  useEffect(() => {
    // You don't need to add any specific JavaScript here as it's now in widget.js
    // The script will be automatically loaded and executed when the page is rendered.
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Main Site</h1>
      <button id="try-on-button" style={{ padding: '10px 20px', fontSize: '16px' }}>
        Try On
      </button>

      {/* Load the external widget.js script */}
      <Script
        src="/widget.js"
        strategy="afterInteractive" // Ensure the script is loaded after page load
      />
    </div>
  );
}

