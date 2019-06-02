import Controller from '@ember/controller';
import { computed } from '@ember-decorators/object';
import { htmlSafe } from '@ember/string';
import { service } from '@ember-decorators/service';

export default class PodcastsController extends Controller {
  @service hifi

  @computed('hifi.volume')
  get playerStyle() {
    let fontSize = +this.get('hifi.volume') * 2 || 10;
    return htmlSafe(`font-size: ${fontSize}px`);
  }
}
