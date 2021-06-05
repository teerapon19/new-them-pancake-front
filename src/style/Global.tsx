import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'
import 'antd/dist/antd.css'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .secondary {
    color: white;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(131, 165, 218);
    border-radius: 8px;
  }

  .ant-layout-sider-collapsed .ant-menu-item.ant-menu-item-selected {
    padding-left: 20px !important;
  }

  .ant-menu-submenu {
    background: none !important;
  }

  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    /* color: rgba(255, 255, 255, 0.65); */
    background: rgb(16,38,72);
  }

  .ant-menu-sub .ant-menu-item.ant-menu-item-selected {
    padding-left: 38px !important;
  }

  .ant-menu-item.ant-menu-item-selected {
    width: calc(100% - 20px) !important;
    /* padding-left: 15px !important; */
    margin: 0 auto !important;
    padding-left: 16px !important;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1) !important;
    /* animation: none !important; */
    
  }

  .ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon + span, .ant-menu-dark .ant-menu-item-selected .anticon + span {
    color: inherit;
  }

`

export default GlobalStyle
