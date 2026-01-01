import * as Linking from "expo-linking";

export const openInNewTab = (url: string) => {
  if (typeof window !== 'undefined' && window.open) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    Linking.openURL(url);
  }
};