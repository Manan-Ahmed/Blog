/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// import createMDX from '@next/mdx';
import createMDX from '@next/mdx';

const withMDX = createMDX();

export default withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'], 
});
