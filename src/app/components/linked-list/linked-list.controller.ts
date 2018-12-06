import { Observable } from 'rxjs';
import { LinkedListServiceName } from '../../linked-list/LinkedList';
import { ILinkedListNode } from '../../models';

export class LinkedListComponentController {
  private nodeValue = '';
  private moveType = '';
  private targetNode = '';
  private nodes: ILinkedListNode[] = [];

  constructor(private LinkedListService: any) {}

  public $onInit() {
    this.LinkedListService.getNodes$().subscribe((nodes: ILinkedListNode[]) => {
      this.nodes = nodes;
    });
  }

  public add() {
    this.LinkedListService.add(this.nodeValue);
    this.nodeValue = '';
  }

  public remove(node: ILinkedListNode) {
    this.LinkedListService.remove(node);
  }

  public show() {
    this.LinkedListService.log();
  }

  public onKeyup(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.add();
    }
  }

  public move(node: ILinkedListNode) {
    console.log('Move :: ', node, ' || ', this.moveType, ' ', this.targetNode);
  }
}

LinkedListComponentController.$inject = [LinkedListServiceName];
