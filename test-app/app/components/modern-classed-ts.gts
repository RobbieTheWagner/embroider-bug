import Component from '@glimmer/component';
import ConditionalError from './conditional-error';

export default class ModernClassedTS extends Component {
  <template>
    <ConditionalError @label="Modern Classed (gts)" @name="ModernClassedTS">
      Yielded
    </ConditionalError>
  </template>
}
