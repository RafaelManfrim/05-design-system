interface TokensGridProps {
  tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokensGridProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
