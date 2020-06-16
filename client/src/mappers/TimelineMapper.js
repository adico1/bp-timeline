import DateUtil from '../utils/date-util';
import StringUtil from '../utils/string-util';
import FileUtil from '../utils/file-util';
import TimelineItemSetModel from '../models/TimelineItemSetModel';
import TimelineItemModel from '../models/TimelineItemModel';
import TimelineItemType from '../models/TimelineItemType';

const v1Mapper = {
  challenge: 'Challenge',
  make_a_map: 'MakeAMap',
  draw_about_it: 'DrawAboutIt',
  easy_quiz: 'EasyQuiz',
  make_a_movie: 'MakeAMovie',
  movie: 'Movie',
  quiz: 'Quiz',
  related_reading: 'RelatedReading',
  word_play: 'Wordplay',
};

export default class TimelineMapper {
  static mapItem(item) {
    const itemDate = new Date((`${item.d_created}000`) * 1);

    const timelineItem = new TimelineItemModel();
    const tName = StringUtil.nameCapitalize(item.topic_data.name);
    const tType = item
      .resource_type
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => StringUtil.nameCapitalize(word))
      .join(' ');

    timelineItem.id = item.id;
    timelineItem.title = `${tName} ${tType}`;
    timelineItem.date = itemDate;
    timelineItem.type = TimelineItemType[v1Mapper[item.resource_type]];
    timelineItem.image = FileUtil.getFilename(item.topic_data.icon_path);
    timelineItem.teacherComment = item.comment;
    timelineItem.score = item.score;
    timelineItem.ofScore = item.possible_score;
    timelineItem.product = item.product;
    return timelineItem;
  }

  static mapV1(apiResponseTimeline) {
    const timelineItemSets = [];
    const possibleAutoComplete = [];

    let lastMonthName = null;
    let timelineItemsMonthly = null;
    apiResponseTimeline
      .sort((a, b) => b.d_created - a.d_created)
      .forEach((item) => {
        const itemDate = new Date((`${item.d_created}000`) * 1);
        const monthName = DateUtil.getMonthNameLong(itemDate);

        if (monthName !== lastMonthName) {
          lastMonthName = monthName;
          timelineItemsMonthly = new TimelineItemSetModel();
          timelineItemsMonthly.month = monthName;
          timelineItemsMonthly.items = [];
          timelineItemSets.push(timelineItemsMonthly);
        }

        const timelineItem = TimelineMapper.mapItem(item);
        possibleAutoComplete.push(timelineItem.title);

        timelineItemsMonthly.items.push(timelineItem);
      });

    return [timelineItemSets, possibleAutoComplete];
  }

  static mapv2tov1(v2response) {
    const newArr = [];
    v2response.forEach((resourceItem) => {
      resourceItem.activities.forEach((activity) => {
        newArr.push({ ...activity, resource_type: resourceItem.resource_type });
      });
    });

    return newArr;
  }
}
