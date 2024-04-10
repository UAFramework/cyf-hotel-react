const Footer = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contactLine) => (
        <li key={contactLine}>{contactLine}</li>
      ))}
    </ul>
  )
}

export default Footer
