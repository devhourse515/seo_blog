const CustomUserListItem = props => {
  const client = props.row.original

  return (
    <>
      <td class='text-center' key={client.id}>
        {client.id}
      </td>
      <td class='text-center'>{client.username}</td>
      <td class='text-center'>{client.email}</td>
      <td class='text-center'>{client.country}</td>
      <td class='text-center'>{client.contact}</td>
    </>
  )
}

export default CustomUserListItem
