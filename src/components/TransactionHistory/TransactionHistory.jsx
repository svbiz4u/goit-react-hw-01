const TransactionHistory = ({ items }) => {
   const tableData = items.map (({ id, type, amount, currency }) =>
      <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
      </tr>
  );

   return (
      <table>
   <thead>
      <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
       </tr>
  </thead>

  <tbody>
    {tableData}
  </tbody>
</table>
   ) 
}
export default TransactionHistory