/** @type {import('next').NextConfig}  */
const nextConfig = {
    images: { unoptimized: true },
    output: 'export',
    plugins: [
        require('tailwind-scrollbar'),
        // ...
    ],
}

module.exports = nextConfig
