/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    output: {
        exportTrailingSlash: true,
    },
}

module.exports = nextConfig
