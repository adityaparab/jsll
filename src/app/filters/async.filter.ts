import { Observable } from 'rxjs';
import { ILinkedListNode } from '../models';
import { FiltersModule } from './filters.module';

function AsyncFilter() {
  return function AsyncFilterCallback(nodes$: Observable<ILinkedListNode[]>) {
    return new Promise((resolve) => {
      const nodesSubscription = nodes$.subscribe((nodes: ILinkedListNode[]) => {
        resolve(nodes);
      });
    });
  };
}

FiltersModule.filter('async', AsyncFilter);
