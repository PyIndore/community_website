/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow admin-uploaded images (Supabase Storage public URLs) via next/image.
    remotePatterns: [{ protocol: "https", hostname: "**.supabase.co" }],
  },
};

export default nextConfig;
