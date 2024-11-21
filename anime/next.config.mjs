/** @type {import('next').NextConfig} */

// menambahkan url dari luar/cdn
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            }
        ]
    }
};

export default nextConfig;
