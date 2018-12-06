import v4 from 'uuid/v4';
import { ILinkedListNode } from '../models';

export class LinkedListNode implements ILinkedListNode {
  public next: ILinkedListNode;
  public value: string;
  public id: string;

  constructor(next: any, value: string, id: string = '') {
    this.next = next;
    this.value = value;
    this.id = v4();
  }
}
