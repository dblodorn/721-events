import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import '@zoralabs/zord/index.css'
import '../styles/globals.css'
import '../styles/reset.css'
import type { AppProps } from 'next/app'
import { createClient, chain, WagmiProvider } from 'wagmi'
import { HeaderComposition } from 'compositions/Header/HeaderComposition'
import { NFTFetchConfiguration } from '@zoralabs/nft-hooks'
import { ZDKFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies'
import { ModalContextProvider } from '@modal'
import { V3Provider } from '@market'
import { GALACTUS_BASE_URL } from 'utils/env-vars'
import { CollectionsProvider } from 'providers/CollectionsProvider'
import { useCollections } from 'hooks/zdk/useCollections'
import { ContractProvider } from '@market/providers/ContractProvider'

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

function MyApp({ Component, pageProps }: AppProps) {
  const { collections } = useCollections()
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
            <CollectionsProvider collections={collections}>
              <ModalContextProvider>
                <ContractProvider>
                  <HeaderComposition />
                  <AnyComponent {...pageProps} />
                </ContractProvider>
              </ModalContextProvider>
            </CollectionsProvider>
          </V3Provider>
        </RainbowKitProvider>
      </NFTFetchConfiguration>
    </WagmiProvider>
  )
}

export default MyApp
