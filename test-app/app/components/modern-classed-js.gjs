import Component from '@glimmer/component';
import ConditionalError from './conditional-error';

export default class ModernClassedJS extends Component {
  <template>
    <ConditionalError @label="Modern Classed (gjs)" @name="ModernClassedJS">
      Yielded
    </ConditionalError>
  </template>
}
