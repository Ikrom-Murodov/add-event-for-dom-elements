/**
 * The first character of the value becomes uppercase.
 * @param {string} value
 * @example capitalize('text') - Text
 * @returns {string} - Returns a value, only the first character of the value will be uppercase.
 */
function capitalize(value: string): string {
  return value[0].toUpperCase() + value.slice(1);
}

/**
 * Interface for class parameter DomListener.
 * @interface
 */
interface IDomParams {
  element: HTMLElement;
  eventNames: Array<keyof GlobalEventHandlersEventMap>;
}

/**
 * Create a new instances DomListener.
 * @class
 * @param { IDomParams } params
 */
export class DomListener {
  // eslint-disable-next-line
  [x: string]: any;

  /**
   * @private this property is private.
   */
  private params: IDomParams;

  constructor(params: IDomParams) {
    this.params = params;
  }

  /**
   * This method adds event to html element.
   * @protected - this method is available only for those classes that inherit from this class.
   * @throws - Throws an error if any method was not implemented in the child class.
   * @returns { void } - This method returns nothing.
   */
  protected initDomListener(): void {
    this.params.eventNames.forEach((eventName) => {
      const methodName: string = this.getMethodName(eventName);

      if (!this[methodName]) {
        throw new Error(`Method ${methodName} is not implemented `);
      }

      this.params.element.addEventListener(eventName, this[methodName]);
    });
  }

  /**
   * This method removes event from html element.
   * @protected - this method is available only for those classes that inherit from this class.
   * @throws - Throws an error if any method was not implemented in the child class.
   * @returns { void } - This method returns nothing.
   */
  protected removeDomListener(): void {
    this.params.eventNames.forEach((eventName) => {
      const methodName: string = this.getMethodName(eventName);

      if (!this[methodName]) {
        throw new Error(`Method ${methodName} is not implemented `);
      }

      this.params.element.removeEventListener(eventName, this[methodName]);
    });
  }

  /**
   * Get method name based on event name.
   * @param {string} eventName.
   * @private This method is only available to the class itself.
   * @example this.getMethodName('click') - 'onClick'
   * @returns {string} - returns the method name.
   */
  private getMethodName(eventName: string): string {
    return `on${capitalize(eventName)}`;
  }
}
