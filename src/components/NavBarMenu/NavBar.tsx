import React from 'react'
import styled from 'styled-components'
import { FaWallet } from 'react-icons/fa'
import { useWeb3React } from '@web3-react/core'
import { useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import truncateWalletAddress from 'utils/truncateWalletAddress'

interface ShowNav {
  isTop?: boolean;
  hideNav?: boolean 
}

const ConnectWalletBtn = styled.button`
  background-color:#1263f1;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #013ea7;
  }
`

const NavBarTab = styled.div<ShowNav>`
  background-color: ${props => props.isTop ? '' : '#07162d'};
  text-align: right;
  right: 0;
  top: 0;
  transform: ${props => props.hideNav ? 'translateY(0)' : 'translateY(-100px)'};
  width: 100%;
  padding: 25px;
  z-index: 2;
  position: fixed;
`

const NavBar = (props) => {

  const { hideNav, isTop } = props

  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const wallet = useWalletModal(login, logout, account)

  return (
    <>
      <NavBarTab
        hideNav={hideNav}
        isTop={isTop}
      >
        <ConnectWalletBtn
          type='button'
          onClick={() => {
            if (account && account !== '') {
              wallet.onPresentAccountModal()
            } else {
              wallet.onPresentConnectModal()
            }
          }}
        >
          <FaWallet
            style={{
              position: 'relative',
              top: '2px',
              marginRight: '10px'
            }}
          />
            { account && account !== '' ? truncateWalletAddress(account) : 'Connect wallet'}
        </ConnectWalletBtn>
      </NavBarTab>
    </>
  )
}

export default NavBar