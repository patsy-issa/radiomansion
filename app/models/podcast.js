import Model from 'ember-data/model';
import { attr, hasMany } from '@ember-decorators/data';

export default class Podcast extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') imgSrc;
  @attr('string') imgTitle;
  @hasMany('episode') episodes;
}
