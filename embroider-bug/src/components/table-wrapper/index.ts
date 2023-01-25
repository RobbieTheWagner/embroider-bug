/* eslint-disable ember/no-empty-glimmer-component-classes */
// We need this empty class because of some ember-table issues with sorting without it.
import Component from '@glimmer/component';

interface TableWrapperArgs {
  scrollIndicators?: boolean | string;
  widthConstraint?: 'none' | 'eq-container' | 'gte-container' | 'lte-container';
  fillMode?: 'equal-column' | 'first-column' | 'last-column' | 'nth-column';
  columns: Array<Record<string, unknown>>;
  rows: Array<Record<string, unknown>>;
}

export default class TableWrapperComponent extends Component<TableWrapperArgs> {}
