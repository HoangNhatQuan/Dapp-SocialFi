import { useCallback, useEffect, useState } from 'react'
import { Route, Link, Routes, useLocation, matchPath } from 'react-router-dom'
import SCREEN_PATH_CODE from 'utils/enums/routes.enum'
import HomeComponent from './home/Home.component'
import ViewRoutes from './view.routes'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

import {
  Bars3Icon,
  AcademicCapIcon,
  HomeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { Button, Space, Typography } from 'antd'
import { SystemProgram, Keypair, Transaction } from '@solana/web3.js'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

declare global {
  interface Window {
    phantom: any // 👈️ turn off type checking
  }
}

function WebAppComponent() {
  const { connection } = useConnection()
  const { pathname } = useLocation()
  const { publicKey, sendTransaction } = useWallet()

  const [open, setOpen] = useState(false)
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(false)
  const [navItem, setnavItem] = useState(0)

  const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana
      if (provider?.isPhantom) {
        return provider
      }
    }
    window.open('https://phantom.app/', '_blank')
  }

  useEffect(() => {
    const fetchData = async () => {
      const provider = getProvider()
      try {
        const resp = await provider.connect()
        console.log(resp.publicKey.toString())
        // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
    fetchData()
      // make sure to catch any error
      .catch(console.error)
  }, [])

  const getMyBalance = useCallback(async () => {
    if (!publicKey) return setBalance(0)
    const lamports = await connection.getBalance(publicKey)
    console.log('lamports', lamports)
    return setBalance(lamports)
  }, [connection, publicKey])

  const airdrop = useCallback(async () => {
    try {
      setLoading(true)
      if (publicKey) {
        await connection.requestAirdrop(publicKey, 10 ** 8)
        return getMyBalance()
      }
    } catch (er: any) {
      console.log(er.message)
    } finally {
      return setLoading(false)
    }
  }, [connection, publicKey, getMyBalance])

  useEffect(() => {
    getMyBalance()
  }, [getMyBalance])

  const transfer = useCallback(async () => {
    try {
      setLoading(true)
      if (publicKey) {
        const instruction = SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports: 10 ** 9,
        })
        const transaction = new Transaction().add(instruction)
        const {
          context: { slot: minContextSlot },
          value: { blockhash, lastValidBlockHeight },
        } = await connection.getLatestBlockhashAndContext()

        const signature = await sendTransaction(transaction, connection, {
          minContextSlot,
        })

        await connection.confirmTransaction({
          blockhash,
          lastValidBlockHeight,
          signature,
        })
        return getMyBalance()
      }
    } catch (er: any) {
      console.log(er.message)
    } finally {
      return setLoading(false)
    }
  }, [connection, publicKey, getMyBalance])

  const Menus = [
    {
      title: 'Home',
      src: <HomeIcon className="w-4 h-4" />,
      index: 0,
      path: SCREEN_PATH_CODE.HOME,
    },
    {
      title: 'Certificate',
      src: <AcademicCapIcon className="w-4 h-4" />,
      index: 1,
      path: SCREEN_PATH_CODE.COURSE,
    },
    {
      title: 'Account ',
      src: <UserCircleIcon className="w-4 h-4" />,
      gap: true,
      index: 2,
      path: SCREEN_PATH_CODE.ACCOUNT,
    },
  ]

  return (
    <div className="h-screen flex">
      {pathname === SCREEN_PATH_CODE.LANDING_PAGE ? (
        <></>
      ) : (
        <div
          className={` ${
            open ? 'w-48' : 'w-20 '
          } bg-dark-purple p-5 pt-8 relative duration-300 bg-black`}
        >
          <Bars3Icon
            onClick={() => setOpen(!open)}
            className={`h-6 w-6 absolute cursor-pointer -right-3 top-9 border-dark-purple
             border-2 rounded-full  ${!open && 'rotate-180'}`}
          />

          <div className=" flex gap-x-4 items-center">
            <div>
              <AcademicCapIcon
                className={` h-6 w-6 cursor-pointer duration-500 ${
                  open && 'rotate-[360deg]'
                }`}
              />
            </div>

            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && 'scale-0'
              }`}
            >
              W34E
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li key={index} onClick={() => setnavItem(index)}>
                <Link
                  to={Menu.path}
                  className={`flex  rounded-md p-2 h-8 cursor-pointer
                  hover:ring-2
                  hover:ring-indigo-600
                  hover:text-white
                  text-gray-300 text-sm items-center gap-x-4
                  
                  ${navItem === index && 'bg-indigo-500 text-yellow-50'}
                  ${Menu.gap ? 'mt-9' : 'mt-2'}
                  ${index === 0 && 'bg-light-white'} `}
                >
                  <div className="ml-1">{Menu.src}</div>
                  <span
                    className={`${
                      !open && 'hidden'
                    } origin-left duration-200 font-semibold font-sans`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
            <li className='mt-10'>
              <WalletMultiButton />
            </li>
          </ul>
        </div>
      )}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-3">
        <div className="mx-auto ">
          <Routes>
            {ViewRoutes.map(({ component, path, children, ...rest }) => {
              return <Route key={path} path={path} element={component} />
            })}
          </Routes>
        </div>{' '}
      </div>
    </div>
  )
}

// const modal = () => (
//   <div>
//     <Typography.Title>My Balance: {balance / 10 ** 9} SOL</Typography.Title>
//     <Space>
//       <Button type="primary" size="large" onClick={airdrop} loading={loading}>
//         Airdrop
//       </Button>
//       <Button type="primary" size="large" onClick={transfer} loading={loading}>
//         Transfer
//       </Button>
//     </Space>
//   </div>
// )
export default WebAppComponent
