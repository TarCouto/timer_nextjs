import { join } from 'path';

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = join(process.cwd(), 'src');
    return config;
  },
};

export default nextConfig;
