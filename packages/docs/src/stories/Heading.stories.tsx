import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@rafaelmanfrim-ignite-ui/react'

export default {
  title: 'Typhograpy/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
