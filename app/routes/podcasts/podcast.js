import Route from '@ember/routing/route';

export default class EpisodesRoute extends Route {
  model({ podcast_id: podcastId }) {
    return this.store.find('podcast', podcastId);
  }

  async afterModel(podcast) {
    let episodes = await podcast.get('episodes');
    let firstEpisode = episodes.firstObject;
    if (!firstEpisode.isExternal) {
      this.transitionTo('podcasts.podcast.episode', podcast.id, firstEpisode.id);
    }
  }
}
