import { IModule, module } from 'angular';
import { LinkedListModuleName, LinkedListNodeComponentModuleName } from './components';
import { FiltersModuleName } from './filters';
import { ServicesModuleName } from './services';

export class LinkedListDemo {
  private module: IModule = module('app', [
    FiltersModuleName,
    ServicesModuleName,
    LinkedListModuleName,
    LinkedListNodeComponentModuleName
  ]);
}

export const LinkedListDemoInstance = new LinkedListDemo();
