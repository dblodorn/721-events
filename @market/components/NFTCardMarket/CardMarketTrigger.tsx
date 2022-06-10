import { Label, LabelProps } from '@zoralabs/zord'

interface TriggerProps extends LabelProps {
  cta: string
}

export function CardMarketTrigger({ cta, ...props }: TriggerProps) {
  return (
    <Label
      px="x6"
      py="x2"
      mt="x2"
      as="span"
      size="xs"
      color="primary"
      borderRadius="curved"
      backgroundColor="primary"
      style={{ border: 'var(--border-a)' }}
      {...props}
    >
      {cta}
    </Label>
  )
}
