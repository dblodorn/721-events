import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

import type { AppProps } from 'next/app'
import { createClient, chain, WagmiProvider } from 'wagmi'
import { NFTFetchConfiguration } from '@zoralabs/nft-hooks'
import { ZDKFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies'
import { ModalContextProvider } from '@modal'
import { V3Provider } from '@market'
import { GALACTUS_BASE_URL } from 'utils/env-vars'
import { ContractProvider } from '@market/providers/ContractProvider'
import { FeedProvider } from '@feed'

import { HeaderComposition, FooterComposition } from 'components'

import '@zoralabs/zord/index.css'
import '../styles/globals.css'
import '../styles/reset.css'
import 'styles/styles.css'

const infuraId = process.env.INFURA_ID

// const chains = defaultChains
const { chains, provider } = configureChains([chain.mainnet], [
  apiProvider.infura(infuraId),
])

const { connectors } = getDefaultWallets({
  appName: 'Contract Manager',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export const strategy = new ZDKFetchStrategy('1', GALACTUS_BASE_URL)

function VisionApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  
  return (
    <WagmiProvider client={wagmiClient}>
      <NFTFetchConfiguration networkId="1" strategy={strategy}>
        <RainbowKitProvider
          chains={chains}
          coolMode
          theme={darkTheme({
            accentColor: 'green',
            borderRadius: 'large',
          })}
        >
          <V3Provider>
            <ModalContextProvider>
              <FeedProvider>
                <ContractProvider>
                  <HeaderComposition />
                  <AnyComponent {...pageProps} />
                  <FooterComposition />
                </ContractProvider>
              </FeedProvider>
            </ModalContextProvider>
          </V3Provider>
        </RainbowKitProvider>
      </NFTFetchConfiguration>
    </WagmiProvider>
  )
}

export default VisionApp
