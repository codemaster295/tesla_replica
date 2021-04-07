module.exports = {
    purge: ['./public**/*.html',
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                gl: ['gothaml'],
                gm: ['gothamm'],
                gb: ['gothamb']
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}