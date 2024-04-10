/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV === "production");

const nextConfig = {
  env: {
    basePath: isProd ? "/nextjs-sneakers" : "",
  },
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
