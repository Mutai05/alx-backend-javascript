/**
 * Updates the quantity of items with initial quantity at 1 to 100 in the given map.
 * @param {Map} groceriesMap - The map of groceries.
 * @returns {void}
 * @throws {Error} - If the argument is not a map.
 */
export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  groceriesMap.forEach((quantity, item) => {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  });
}
