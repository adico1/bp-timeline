import TimelineItemType from './TimelineItemType';

export default class TimelineItemModel {
  constructor(title, date, type, score) {
    this.title = title;
    this.date = date;
    this.type = TimelineItemType[type];
    this.score = score;
  }
}
