import Component from '@ember/component';
import { alias, bool, equal, or, gt } from '@ember-decorators/object/computed';

export default class PodcastItemComponent extends Component {
  classNames = ['podcast__item'];
  classNameBindings = ['noHover::podcast__item_has-hover'];

  @or('isExternal', 'isMany') noHover;
  @bool('externalEpisode.isExternal') isExternal;
  @gt('podcast.episodes.length', 1) isMany;
  @alias('podcast.episodes.firstObject') externalEpisode;

  didRender() {
    this.renderedTask.perform();
  }
}
