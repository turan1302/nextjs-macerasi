/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : false,

    async redirects(){
        return [
            {
                source: "/",
                destination: "/admin",
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
