import template from './linked-list.component.html';
import { LinkedListComponentController } from './linked-list.controller';
import { LinkedListModule } from './linked-list.module';

const LinkedListComponentName = 'linkedList';

const LinkedListComponentDefinition = {
  controller: LinkedListComponentController,
  template
};

LinkedListModule.component(
  LinkedListComponentName,
  LinkedListComponentDefinition
);
