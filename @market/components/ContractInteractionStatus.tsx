import { ModalTitleAndDescription } from '@market/components'
import { Box, Button, Flex, Label, Paragraph, Text, Stack } from '@zoralabs/zord'
import React from 'react'
import { shortenTxHash } from '../utils/format'
import { ETHERSCAN_BASE_URL } from '../utils/transactions'

interface ContractInteractionStatusProps {
  title: string
  tokenAddress?: string
  tokenId?: string
  description?: string
  buttonCopy?: string
  amount?: string
  currencyAddress?: string
  onConfirm?: () => void
  txHash: string
  previewURL?: string
}

export function ContractInteractionStatus({
  title,
  amount,
  currencyAddress,
  description = 'Once your transaction has been processed it will be reflected on the page. In the meanwhile, you can close this window.',
  buttonCopy = 'Got It',
  onConfirm,
  txHash,
  previewURL,
}: ContractInteractionStatusProps) {
  return (
    <Box>
      <ModalTitleAndDescription title={title} description={description} />
      {amount && (
        <Box mt="x2" mb="x4">
          {amount} {currencyAddress}
        </Box>
      )}
      <Stack>
        <Flex gap="x4">
          <Box
            as="img"
            src={previewURL}
            alt="token-preview-img"
            w="x14"
            h="x14"
            borderRadius="normal"
            backgroundColor="secondary"
          />
          <Flex flex={1} direction={['column', 'row']} w="100%">
            <Box flex={1}>
              <Label mb="x0" size="sm">
                Status
              </Label>
              <Paragraph mb="x0" size="sm">
                Processing
              </Paragraph>
            </Box>
            <Box flex={1}>
              <Label mb="x0" size="sm">
                Transaction Hash
              </Label>
              <a
                href={`${ETHERSCAN_BASE_URL}/tx/${txHash}`}
                target="_blank"
                rel="noreferer noopener noreferrer"
              >
                <Text as="span" variant="link">
                  {shortenTxHash(txHash, 7, 4)}
                </Text>{' '}
                <Paragraph as="sup" top="x0" size="sm">
                  ↗
                </Paragraph>
              </a>
            </Box>
          </Flex>
        </Flex>
      </Stack>
      <Button w="100%" mt="x5" onClick={onConfirm}>
        {buttonCopy}
      </Button>
    </Box>
  )
}
