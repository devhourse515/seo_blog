const CustomInvoiceListItem = props => {
  const invoice = props.row.original

  return (
    <>
      <th class='text-center'>{invoice.name}</th>
      <th class='text-center'>{invoice.email}</th>
      <th class='text-center'>{invoice.service}</th>
      <th class='text-center'>{invoice.total}</th>
      <th class='text-center'>{invoice.issuedDate}</th>
      <th class='text-center'>{invoice.dueDate}</th>
      <th class='text-center'>{invoice.country}</th>
      <th class='text-center'>{invoice.contact}</th>
    </>
  )
}

export default CustomInvoiceListItem
