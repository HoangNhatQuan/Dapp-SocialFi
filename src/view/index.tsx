import IonIcon from '@sentre/antd-ionicon'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

import { SystemProgram, Keypair, Transaction } from '@solana/web3.js'
import { Image, Col, Layout, Row, Space, Typography, Button } from 'antd'
import { useCallback, useEffect, useState } from 'react'

import logo from 'static/images/solanaLogo.svg'
import brand from 'static/images/solanaLogoMark.svg'
import './index.less'
import LandingPageComponent from './landingpage/LandingPage.component'

function View() {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(false)

  const getMyBalance = useCallback(async () => {
    if (!publicKey) return setBalance(0)

    const lamports = await connection.getBalance(publicKey)
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

  const transfer = useCallback(async () => {
    try {
      setLoading(true)
      if (publicKey) {
        const instruction = SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports: 10 ** 8,
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

  useEffect(() => {
    getMyBalance()
  }, [getMyBalance])

  return (
    <Layout className="container">
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col flex="auto">
              <img src={brand} alt="logo" height={20} />
            </Col>
            <Col>
              <WalletMultiButton />
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Space direction="vertical" size={24}>
            <Image src={logo} preview={false} width={256} />
            <Typography.Title level={1}>React + Solana = DApp</Typography.Title>
            <Typography.Text type="secondary">
              <Space>
                <IonIcon name="logo-react" />
                +
                <IonIcon name="logo-solana" />
                =
                <IonIcon name="rocket" />
              </Space>
            </Typography.Text>
            <Typography.Title>
              My Balance: {balance / 10 ** 9} SOL
            </Typography.Title>
            <Space>
              <Button
                type="primary"
                size="large"
                onClick={airdrop}
                loading={loading}
              >
                Airdrop
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={transfer}
                loading={loading}
              >
                Transfer
              </Button>
            </Space>
          </Space>
        </Col>
      </Row>

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </Layout>
  )

  // return (
  //   <div>
  //     <LandingPageComponent />
  //   </div>
  // )
}

export default View
