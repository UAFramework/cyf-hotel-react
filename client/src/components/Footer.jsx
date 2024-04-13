const Footer = ({ contacts }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {contacts.map((contactLine) => (
        <li key={contactLine}>{contactLine}</li>
      ))}
    </ul>
  )
}

export default Footer
