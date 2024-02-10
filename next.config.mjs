/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.animaapp.com",
        port: "",
        pathname:
          "/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/**",
      },

      {
        protocol: "https",
        hostname: "www.nytimes.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
