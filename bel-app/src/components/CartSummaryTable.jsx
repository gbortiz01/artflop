
  
  function CartSummaryTable({ cart }) {
    return (
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th>Cantidad</Th>
              <Th>Precio Unitario</Th>
              <Th>Precio total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.productss.map(({ products, quantity }) => (
              <Tr textAlign={"left"} key={products.id}>
                <Td>{products.title}</Td>
                <Td>{quantity}</Td>
                <Td isNumeric>${products.price}</Td>
                <Td isNumeric>${products.price * quantity}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
  
  export default CartSummaryTable;