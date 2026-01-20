import createAMSClient from "./createAMSClient";
import FramedlessClient from './FramedlessClient';
import FramedClient from './FramedClient';

declare global {
  interface Window {
    Microsoft: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

export default createAMSClient;

// Only setup global namespace in browser environments
// This allows the library to be used in Node.js/SSR contexts
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;

  // Check existence of global objects to avoid overwrite/clashing
  if (!("Microsoft" in win)) {
    win.Microsoft = {};
  }

  if (!("CRM" in win.Microsoft)) {
    win.Microsoft.CRM = {};
  }

  if (!("Omnichannel" in win.Microsoft.CRM)) {
    win.Microsoft.CRM.Omnichannel = {};
  }

  if (!("AMSClient" in win.Microsoft.CRM.Omnichannel)) {
    win.Microsoft.CRM.Omnichannel.AMS = {
      SDK: {
        createAMSClient,
        FramedClient,
        FramedlessClient,
      }
    };
  }
}