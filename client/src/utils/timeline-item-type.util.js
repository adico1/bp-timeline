import TimelineItemType from '../models/TimelineItemType';
import TimelineItemTypeConfig from '../models/TimelineItemTypeConfig';

export default class TimelineItemTypeUtil {
  static getZoomByType(type) {
    return TimelineItemTypeConfig[TimelineItemType[type]].Zoom;
  }

  static getScoreByType(type) {
    return TimelineItemTypeConfig[TimelineItemType[type]].Score;
  }
}
