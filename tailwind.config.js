/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,vue}"],
  theme: {
    extend: {
      colors: {
        'font-primary': '#1990FF',
        'btn-primary': '#1890FF',
        'point-green': '#52C41A',
        error: '#F5222D',
        grey: '#D9D9D9',
        white: '#FFFFFF',
        black: '#222222',
        blue: {
          header: '#001529',
          'header-hover': '#252A3D',
          active: '#1677ff',
          hover: '#4096ff',
        },
        gray: {
          4: '#F0F2F5',
          6: '#999999',
          bg: '#F5F5F5',
          text: 'rgb(255 255 255 / 65%)',
          breadcrumb: {
            light: 'rgb(0 0 0 / 45%)',
            deep: 'rgb(0 0 0 / 65%)',
          },
          disabled: {
            border: '#D9D9D9',
            text: 'rgba(0, 0, 0, 0.25)',
            bg: 'rgba(0, 0, 0, 0.04)',
          },
        },
        info: {
          text: '#1677ff',
          bg: '#e6f4ff',
          border: '#91caff',
        },
        warning: {
          text: '#faad14',
          bg: '#fffbe6',
          border: '#ffe58f',
        },
        success: {
          text: '#52c41a',
          bg: '#f6ffed',
          border: '#b7eb8f',
        },
        'alert-error': {
          text: '#ff4d4f',
          bg: '#fff2f0',
          border: '#ffccc7',
        },
      },
      boxShadow: {
        'picker-panel':
          '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05);',
        'input-active': '0 0 0 2px rgba(5, 145, 255, 0.1);',
        'input-error': '0 0 0 2px rgba(255, 38, 5, 0.06);',
        card: 'rgba(31, 35, 41, 0.1) 0px 1px 4px 0px',
      },
      minWidth: {
        screen: '768px',
      },
    },
  },
  plugins: [],
}
