import { Observable } from 'rxjs';
import { ILinkedListNode } from './LinkedListNode';

export interface ILinkedList {
  head: ILinkedListNode;
  tail: ILinkedListNode;
  count: number;
  add: (value: string) => void;
  remove: (node: ILinkedListNode) => void;
  insertAfter: (
    whichNode: ILinkedListNode,
    afterWhichNode: ILinkedListNode
  ) => void;
  insertBefore: (
    whichNode: ILinkedListNode,
    beforeWhichNode: ILinkedListNode
  ) => void;
  log: () => void;
  toArray: () => ILinkedListNode[];
  nodes$: Observable<ILinkedListNode[]>;
}
