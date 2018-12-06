import { LinkedListNodeComponentModule } from './linked-list-node.module';

import template from './linked-list-node.component.html';
import { LinkedListNodeComponentController } from './linked-list-node.controller';

export const LinkedListNodeComponentName = 'linkedListNode';

const LinkedListNodeComponentDefinition = {
  bindings: {
    node: '<',
    nodes: '<'
  },
  controller: LinkedListNodeComponentController,
  template
};

LinkedListNodeComponentModule.component(
  LinkedListNodeComponentName,
  LinkedListNodeComponentDefinition
);
