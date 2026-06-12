/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
  },
  allowedDevOrigins: ["*.preview.emergentagent.com"],
};

export default nextConfig;
