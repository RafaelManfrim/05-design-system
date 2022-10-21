import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@rafaelmanfrim-ignite-ui/react'

export default {
  title: 'Typhograpy/Text',
  component: Text,
  args: {
    children: 'Example text',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
