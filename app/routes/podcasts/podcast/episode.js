import Route from '@ember/routing/route';
import { service } from '@ember-decorators/service';

export default class EpisodeRoute extends Route {
  @service hifi;

  model({ episode_id: episodeId }) {
    return this.store.find('episode', episodeId);
  }

  afterModel(model) {
    let hifi = this.hifi;
    hifi.set('nowPlaying', model.title || model.id);
    if (hifi.isPlaying) {
      hifi.pause();
      hifi.rewind();
    }
    if(!model.isExternal) {
      let url = `/assets/episodes/${model.src}`;
      hifi.play(url);
    }
  }
}
