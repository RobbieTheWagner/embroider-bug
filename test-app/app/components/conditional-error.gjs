import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';

let error = () => {
  throw new Error('My custom ConditionalError');
}

const expected = (name) => `Demo
  ${name}
    ConditionalError
`

export default class ConditionalError extends Component {
  <template>
    <fieldset>
      <legend>{{@label}}</legend>
      <button {{on "click" this.toggle}}>throw error</button>

      {{#if this.visible}}
        {{ (error) }}
      {{/if}}

      <br><br>Expected Leaves of Template-Stack:<pre>{{expected @name}}</pre>
    </fieldset>
  </template>

  @tracked visible = false;

  toggle = () => this.visible = !this.visible;
}


