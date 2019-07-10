/**
 * Set data structure
 *  - Shadows native ES6 Set (academic purposes)
 */
export class Set<T> {
  /**
   * Items in the set
   */
  private items: T[];

  /**
   * Create a new set
   */
  constructor(...items: T[]) {
    // New empty set
    this.items = [];

    // Add items
    this.add(...items);
  }

  /**
   * Add item(s) to the set
   */
  public add(...items: T[]): void {
    items.forEach(item => {
      // Set arleady contains item
      if (this.has(item)) throw new Error(`'${item}' already in set`);

      // Add to set
      this.items.push(item);
    });
  }

  /**
   * Remove an item from the set
   */
  public remove(item: T): void {
    // Find item
    const index: number = this.items.indexOf(item);

    // Item not found
    if (index === -1) throw new Error(`'${item}' not found in set`);

    // Remove item
    this.items.splice(index, 1);
  }

  /**
   * Does set contain given item?
   */
  public has(item: T): boolean {
    return this.items.includes(item);
  }

  /**
   * Clear all items from the set
   */
  public clear(): void {
    this.items = [];
  }

  /**
   * Get all items in the set
   */
  public list(): T[] {
    return this.items;
  }
}
