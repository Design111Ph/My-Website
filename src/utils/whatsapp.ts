/**
 * WhatsApp Helper Utilities
 * Enables direct connection to the WhatsApp Desktop Application on desktop computers
 * (via the native `whatsapp://` URI protocol), with WhatsApp Web fallback support.
 */

import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Checks if the current client is a desktop browser.
 */
export function isDesktopDevice(): boolean {
  if (typeof window === 'undefined') return true;
  return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Cleans phone number by stripping all non-digit characters.
 */
export function sanitizePhoneNumber(phone: string = PERSONAL_INFO.phone): string {
  return phone.replace(/[^0-9]/g, '');
}

/**
 * Generates the native WhatsApp Desktop / Mobile App URI.
 * On desktop (Windows / macOS), navigating to this scheme invokes the installed WhatsApp desktop app directly.
 */
export function getWhatsAppAppUrl(
  phone: string = PERSONAL_INFO.phone,
  message: string = ''
): string {
  const cleanPhone = sanitizePhoneNumber(phone);
  const trimmed = message.trim();
  const query = trimmed ? `&text=${encodeURIComponent(trimmed)}` : '';
  return `whatsapp://send?phone=${cleanPhone}${query}`;
}

/**
 * Generates the WhatsApp Web URL (opens in browser tab).
 */
export function getWhatsAppWebUrl(
  phone: string = PERSONAL_INFO.phone,
  message: string = ''
): string {
  const cleanPhone = sanitizePhoneNumber(phone);
  const trimmed = message.trim();
  const query = trimmed ? `&text=${encodeURIComponent(trimmed)}` : '';
  return `https://web.whatsapp.com/send?phone=${cleanPhone}${query}`;
}

/**
 * Generates universal wa.me URL (standard cross-platform landing).
 */
export function getWhatsAppUniversalUrl(
  phone: string = PERSONAL_INFO.phone,
  message: string = ''
): string {
  const cleanPhone = sanitizePhoneNumber(phone);
  const trimmed = message.trim();
  const query = trimmed ? `?text=${encodeURIComponent(trimmed)}` : '';
  return `https://wa.me/${cleanPhone}${query}`;
}

export interface ConnectWhatsAppOptions {
  phone?: string;
  message?: string;
  mode?: 'auto' | 'app' | 'web';
  onConnecting?: (target: 'app' | 'web' | 'mobile') => void;
}

/**
 * Connect to WhatsApp:
 * - Desktop: connects directly to the WhatsApp desktop application (`whatsapp://send?phone=...`)
 * - Mobile: opens WhatsApp application via universal wa.me
 * - If `mode === 'web'`, forces WhatsApp Web in a new tab.
 */
export function connectToWhatsApp({
  phone = PERSONAL_INFO.phone,
  message = '',
  mode = 'auto',
  onConnecting,
}: ConnectWhatsAppOptions = {}): { modeUsed: 'app' | 'web' | 'mobile' } {
  const isDesktop = isDesktopDevice();

  // Explicit WhatsApp Web request
  if (mode === 'web') {
    const webUrl = getWhatsAppWebUrl(phone, message);
    window.open(webUrl, '_blank', 'noopener,noreferrer');
    onConnecting?.('web');
    return { modeUsed: 'web' };
  }

  // Desktop user: Connect directly to native WhatsApp desktop application
  if (mode === 'app' || (mode === 'auto' && isDesktop)) {
    const appUrl = getWhatsAppAppUrl(phone, message);

    // Create a temporary hidden link to trigger the protocol handler cleanly
    // without leaving blank browser windows open
    const tempLink = document.createElement('a');
    tempLink.href = appUrl;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();

    setTimeout(() => {
      if (document.body.contains(tempLink)) {
        document.body.removeChild(tempLink);
      }
    }, 500);

    onConnecting?.('app');
    return { modeUsed: 'app' };
  }

  // Mobile device: use universal link which deep-links to WhatsApp Mobile app
  const universalUrl = getWhatsAppUniversalUrl(phone, message);
  window.open(universalUrl, '_blank', 'noopener,noreferrer');
  onConnecting?.('mobile');
  return { modeUsed: 'mobile' };
}
