/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongodb", "nodemailer"],
  },
};

export default nextConfig;
