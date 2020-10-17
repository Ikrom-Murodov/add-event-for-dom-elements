# Declaratively add an event for a DOM element.

## Installation.

```npm
npm install add-event-for-dom-elements
```

# Usage example.

```ts
import { DomListener } from "observer-pattern-js";

class HeaderComponent extends DomListener {
  constructor() {
    super({
      element: document.querySelector('h1') as HTMLElement,
      // You must implement methods such as onClick, onDblclick, onContextmenu in your class, 
      // otherwise there will be an error.
      eventNames: ['click', 'dblclick', 'contextmenu'],
    });

    this.init();
  }

  private init(): void {
    // When this method is called, the DomListener class adds the event you specified 
    // ({eventNames: ['click', 'dblclick', 'contextmenu']}) to the html element you 
    // specified ({element: document.querySelector ('h1') as HTMLElement,}).
    this.initDomListener();
  }

  private onClick(event: Event): void {
    console.log('click', event.target);
  }

  private onDblclick(event: Event): void {
    console.log('dblclick', event.target);
  }

  private onContextmenu(event: Event): void {
    console.log('context menu', event.target);
  }

  public destroy(): void {
    // When this method is called, the DomListener class removes the event 
    // you specified ({eventNames: ['click', 'dblclick', 'contextmenu']}) from the specified 
    // html element ({element: document.querySelector ('h1') as HTMLElement,}).
    this.removeDomListener();
  }
}

const headerComponent = new HeaderComponent();
```
