import {
  LinkedList,
  LinkedListServiceName
} from '../../linked-list/LinkedList';
import { ILinkedListNode } from '../../models';

export class LinkedListNodeComponentController {
  private moveType = 'after';
  private targetNode: ILinkedListNode;
  private node: ILinkedListNode;
  private nodes: ILinkedListNode[];

  constructor(private LinkedListService: LinkedList) {}

  public $ngOnChanges() {
    console.log(arguments);
  }

  public move() {
    if (this.moveType === 'after') {
      this.LinkedListService.insertAfter(this.node, this.targetNode);
    } else if (this.moveType === 'before') {
      this.LinkedListService.insertBefore(this.node, this.targetNode);
    }
  }
}

LinkedListNodeComponentController.$inject = [LinkedListServiceName];
