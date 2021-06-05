import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Layout, Menu, Typography } from 'antd'
import { HomeFilled, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { FaTractor, FaExchangeAlt, FaRocket } from 'react-icons/fa'
import { AiFillDollarCircle } from 'react-icons/ai'
import { RiGroupFill } from 'react-icons/ri'
import { MdMore } from 'react-icons/md'
import NavBar from './NavBar'

const { Title } = Typography
const { Content, Sider } = Layout

const NavBarMenu = (props) => {

  const { children } = props

  const history = useHistory()

  const [collapsed, setCollapsed] = useState(false)
  const [showText, setShowText] = useState(true)

  const [scrollPosition, setScrollPosition] = useState(0)
  const [isTop, setIsTop] = useState(true)
  const [hideOnScroll, setHideOnScroll] = useState(true)
  
  const onCollapse = () => {
    setCollapsed(!collapsed)
    onAnimationEnd()
  }

  const onAnimationEnd = () => {
    if (!collapsed) {
      setShowText(!showText)
    } else {
      setTimeout(() => {
        setShowText(!showText)
      }, 300)
    }
  }

  const GetSelectPath = () => {
    const obj = []
    switch(history.location.pathname) {
      case '/farms':
        obj.push('farms')
      break
      case '/pools':
        obj.push('launchpools')
      break
      default:
        obj.push('home')
    } 
    return obj
  }

  const scroll = (e: any) => {
    const top = e.target.scrollTop
    setHideOnScroll(scrollPosition > top)
    setIsTop(top === 0)
    setScrollPosition(top)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Sider
          // collapsible
          width="240"
          style={{ 
            zIndex: 2000,  
            backgroundColor: 'rgb(16,38,72)',
            borderRight: '2px solid rgba(133, 133, 133, 0.1)'
        }} collapsed={collapsed} onCollapse={onCollapse}>
          <button
            type="button"
            onClick={onCollapse}
            style={{
              float: 'right',
              position: 'relative',
              zIndex: 1,
              right: '-13px',
              top: '25px',
              width: '25px',
              height: '25px',
              display: 'inline-block',
              backgroundColor: 'rgb(28, 50, 84)',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            { !collapsed && <LeftOutlined
              style={{
                position: 'relative',
                top: '-2px',
                marginLeft: '-2px',
                fontSize: '8pt',
                color: 'white',
              }}
            />}
            { collapsed && <RightOutlined
              style={{
                position: 'relative',
                top: '-2px',
                marginLeft: '-2px',
                fontSize: '8pt',
                color: 'white',
              }}
            />}
          </button>
          <div
            style={{
              width: '200px',
              paddingBottom: '50px',
              marginTop: '20px',
              marginLeft: '25px'
            }}
          >
            <img
              style={{ verticalAlign: 'middle' }}
              width="30px" src="/new_images/logo_bunny.svg" alt="logo"/>
            { showText && <Title
              style={{
                position: 'relative',
                top: '5px',
                lineHeight: 0,
                marginLeft: '5px',
                display: 'inline-block',
                color: 'white'
              }}
              level={3}
            >PancakeSwap</Title>}
          </div>
          <Menu
            style={{ 
              backgroundColor: 'rgb(16, 38, 72)'
            }}
            defaultSelectedKeys={GetSelectPath()}
            theme="dark"
            mode="inline"
          >
            <Menu.Item
              key="home"
              onClick={
                () => {
                  history.push('/')
                }
              }
              icon={<HomeFilled />}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="exchange"
              onClick={
                () => {
                  history.push('/swap')
                }
              }
              icon={<FaExchangeAlt
                style={{
                  marginTop: collapsed ? '12px': ''
                }}
              />}
            >
              Exchange
            </Menu.Item>
            <Menu.Item
              key="liquidity"
              onClick={
                () => {
                  history.push('/pool')
                }
              }
              icon={<AiFillDollarCircle
                style={{
                  marginTop: collapsed ? '12px': ''
                }}
              />}
            >
              Liquidity
            </Menu.Item>
            <Menu.Item
              key="farms"
              onClick={
                () => {
                  history.push('/farms')
                }
              }
              icon={<FaTractor
                style={{
                  marginTop: collapsed ? '12px': ''
                }}
              />}
            >
              Farms
            </Menu.Item>
            <Menu.Item
              key="launchpools"
              onClick={
                () => {
                  history.push('/pools')
                }
              }
              icon={<FaRocket
                style={{
                  marginTop: collapsed ? '12px': ''
                }}
              />}
            >
              Launchpools
            </Menu.Item>
            <Menu.Item
              className="referral-program"
              key="referral_program"
              style={{
                color: 'yellow'
              }}
              onClick={
                () => {
                  history.push('/referral')
                }
              }
              icon={<RiGroupFill style={{
                marginTop: collapsed ? '12px': '',
                color: 'yellow'
              }}/>}
            >
              Referral program
            </Menu.Item>
            <Menu.SubMenu
              key="token"
              icon={<MdMore />}
              title="More">
              <Menu.Item
                key="l1"
                onClick={
                  () => {
                    window.open('https://github.com/pancakeswap', '_self')
                  }
                }
              >
                Audit in progress
              </Menu.Item>
              <Menu.Item
                key="l2"
                onClick={
                  () => window.open('https://github.com/pancakeswap', '_self')
                }
              >
                Github
              </Menu.Item>
              <Menu.Item
                key="l3"
                onClick={
                  () => window.open('https://github.com/pancakeswap', '_self')
                }
              >
                Docs
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ height: '100vh' }}>
          <Content
            onScroll={scroll}
            style={{
              margin: '0',
              backgroundColor: 'rgb(2 17 39)',
              height: '100vh',
              overflowY: 'scroll'
            }}
          >
            <NavBar hideNav={hideOnScroll} isTop={isTop}/>
            { children }
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default NavBarMenu
