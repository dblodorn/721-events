import type { NextPage } from 'next'
import { PageWrapper } from 'components/PageWrapper'
import { NFTGrid } from 'components'
import { manageNftsService, ManageNFTsServiceProps } from 'services/manageNftsService'
import { collectionAddresses } from 'utils/collection-addresses'
import { ManageHeader } from 'components/ManageHeader'

/* @ts-ignore */
const Manage: NextPage = ({ initialPage, ownerAddress }: ManageNFTsServiceProps) => {
  return (
    <PageWrapper direction="column">
      <ManageHeader ownerAddress={ownerAddress} />
      {ownerAddress && <NFTGrid ownerAddress={ownerAddress} initialPage={initialPage} />}
    </PageWrapper>
  )
}

export const getServerSideProps = manageNftsService

export default Manage
