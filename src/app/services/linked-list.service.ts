import { Observable, Subject } from 'rxjs';
import { ILinkedListNode } from '../models';
import { ServicesModule } from './service.module';

export const LinkedListServiceName = 'LinkedListService';

class LinkedListService {
  private Nodes: ILinkedListNode[] = [];
  private nodesSubject$ = new Subject<ILinkedListNode[]>();

  public get nodes$(): Observable<ILinkedListNode[]> {
    return this.nodesSubject$.asObservable();
  }

  public set nodes(nodes: ILinkedListNode[]) {
    this.Nodes = nodes;
    this.nodesSubject$.next(nodes);
  }
}

LinkedListService.$inject = [];

ServicesModule.service(LinkedListServiceName, LinkedListService);
