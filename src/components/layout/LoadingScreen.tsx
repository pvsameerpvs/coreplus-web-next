'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        document.body.classList.add('loaded');
      }, 300);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return (
    <div id="loader-container">
      <Image
        src="/images/logo-core-footer.png"
        alt="Loading..."
        width={150}
        height={80}
        className="loader-logo"
        priority
      />
    </div>
  );
}
