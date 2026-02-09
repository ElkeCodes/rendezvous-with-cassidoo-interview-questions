type Order = Record<string, number>;
type OrderSummary = Record<number, Order>;

export function orderSummary(
  orders: Array<{ table: number; items: Array<string> }>,
): OrderSummary {
  return orders.reduce((orderSummary, { table, items }) => {
    orderSummary[table] = items.reduce((tableOrder, item) => {
      tableOrder[item] = (tableOrder[item] ?? 0) + 1;
      return tableOrder;
    }, orderSummary[table] ?? {});
    return orderSummary;
  }, {} as OrderSummary);
}
