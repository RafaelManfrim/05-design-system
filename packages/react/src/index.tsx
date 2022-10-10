import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  borderRadius: '$md',
  padding: '$4',
  backgroundColor: '$ignite500',
  border: 0,
  cursor: 'pointer',
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: '$ignite700',
  },

  variants: {
    size: {
      small: {
        padding: '$4',
      },
      big: {
        padding: '$8',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
