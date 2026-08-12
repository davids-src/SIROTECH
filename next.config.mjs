/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverComponentsExternalPackages: ["mongodb", "nodemailer"],
  },
};

export default nextConfig;
