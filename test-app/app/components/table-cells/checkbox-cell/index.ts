import templateOnlyComponent from '@ember/component/template-only';

interface CheckboxCellSignature {
  Args: {
    column: any;
  };
}

const CheckboxCell = templateOnlyComponent<CheckboxCellSignature>();

export default CheckboxCell;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Cmrt::OutboxList::CheckboxCell': typeof CheckboxCell;
  }
}
