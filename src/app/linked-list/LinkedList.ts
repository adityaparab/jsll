import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ILinkedList, ILinkedListNode } from '../models';
import { LinkedListNode } from './LinkedListNode';

import { ServicesModule } from '../services/service.module';

export const LinkedListServiceName = 'LinkedListService';

export class LinkedList implements ILinkedList {
  public head: ILinkedListNode = new LinkedListNode(null, 'Head Node');
  public tail: ILinkedListNode = { ...this.head };
  public count = 1;
  public nodesSubjectS = new BehaviorSubject<ILinkedListNode[]>(this.toArray());
  public nodes$ = this.nodesSubjectS.asObservable();

  public getNodes$(): Observable<ILinkedListNode[]> {
    return this.nodes$;
  }

  public add(nodeValue: string) {
    const node = new LinkedListNode(null, nodeValue);
    if (this.count++ === 1) {
      this.head.next = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.nodesSubjectS.next(this.toArray());
  }

  public remove(node: ILinkedListNode): void {
    let current = { ...this.head };
    if (current.id === node.id) {
      console.log('id matched, no need to iterate');
    } else {
      while (current.next.id !== node.id) {
        current = current.next;
      }
    }
    delete current.next;
    current.next = node.next;
    this.nodesSubjectS.next(this.toArray());
  }

  public insertAfter(node: ILinkedListNode, targetNode: ILinkedListNode) {
    const nodePrev = this.findPreviousNode(node);
    nodePrev.next = node.next;
    node.next = targetNode.next;
    targetNode.next = node;
    this.nodesSubjectS.next(this.toArray());
  }

  public insertBefore(node: ILinkedListNode, targetNode: ILinkedListNode) {
    const nodePrev = this.findPreviousNode(targetNode);
    const nodePrev2 = this.findPreviousNode(nodePrev);
    nodePrev2.next = node;
    node.next = nodePrev;
    this.nodesSubjectS.next(this.toArray());
  }

  public log() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' ---> '));
  }

  public toArray(): ILinkedListNode[] {
    let current: ILinkedListNode = this.head;
    const nodes: ILinkedListNode[] = [];
    while (current) {
      nodes.push({ ...current });
      current = current.next;
    }

    return nodes;
  }

  private findNode(node: ILinkedListNode) {
    let current = this.head;
    while (current.id !== node.id) {
      current = current.next;
    }
    return current;
  }

  private findPreviousNode(node: ILinkedListNode) {
    let current = this.head;
    while (current.next && current.next.id !== node.id) {
      current = current.next;
    }
    return current;
  }
}

LinkedList.$inject = [];

ServicesModule.service(LinkedListServiceName, LinkedList);
