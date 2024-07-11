'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = 'G-65MT5S9JLB';

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(GA_TRACKING_ID);

    // Track initial page load
    ReactGA.send('pageview');

    // Track page views on route changes
    const handleRouteChange = (url) => {
      ReactGA.send('pageview');
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default GoogleAnalytics;
