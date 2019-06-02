import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default class PodcastContainerComponent extends Component {
  classNames = ['podcast__container'];

  initializeIsotopeTask = task(function * () {
    yield timeout(50);
    if (!this.isotope) {
      this.isoTope = new Isotope(this.element, {
        itemSelector: '.podcast__item',
        layoutMode: 'masonry',
        cellsByRow: {
          columnWidth: '33%'
        }
      });
    } else {
      this.isotope.layout();
    }
  }).restartable();

  willDestroyElement() {
    this.isoTope.destroy();
    return this._super(...arguments);
  }
}
