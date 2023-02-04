import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';



export default class ConditionalError extends Component {
  <template>
    <fieldset>
      <legend>{{@label}}</legend>
      <button {{on "click" this.toggle}}>toggle</button>

      {{#if this.visible}}
        <@render />
      {{/if}}
    </fieldset>
  </template>

  @tracked visible = false;

  toggle = () => this.visible = !this.visible;
}


