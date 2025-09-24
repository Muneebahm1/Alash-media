import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      new URL('https://0b0oscywxayduhb3.public.blob.vercel-storage.com/**'),
    ],
  },
  // Add this configuration to fix the font loading issue
  experimental: {
    turbo: {
      // Disable font optimization for now to avoid the error
      fontLoaders: []
    }
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);