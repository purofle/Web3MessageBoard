/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // noinspection JSUnresolvedReference
        config.externals.push('pino-pretty');
        return config;
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        contractAddress: '0xe526c72317f140AB9301d15D6e4C5f8C75422588',
    },
}

module.exports = nextConfig
