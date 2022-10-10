import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  borderRadius: '$md',
  padding: '$4',
  backgroundColor: '$ignite500',
})

export function App() {
  return <h1>Hello World</h1>
}
