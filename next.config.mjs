import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["imgur.com"],
    },
};

export default withPWA({
    dest: "public",
    buildExcludes: [/middleware-manifest.json$/],
});
