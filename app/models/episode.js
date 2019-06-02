import Model from 'ember-data/model';
import { attr } from '@ember-decorators/data';

export default class Episode extends Model {
  @attr('string') title
  @attr('string') description
  @attr('string') src
  @attr('boolean') isExternal
}
