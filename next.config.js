const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'frontmatter-markdown-loader',
          options: {
            mode: [Mode.REACT],
          },
        },
      ],
    })
    return cfg
  },
}
