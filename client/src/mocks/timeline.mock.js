import TimelineItemModel from '../models/TimelineItemModel';
import TimelineItemSetModel from '../models/TimelineItemSetModel';
import TimelineItemType from '../models/TimelineItemType';

const timelineItemsOct1 = new TimelineItemModel();
timelineItemsOct1.title = 'Camouflage Word Play';
timelineItemsOct1.date = new Date('Oct 28, 2019 7:08 pm');
timelineItemsOct1.type = TimelineItemType.Wordplay;
timelineItemsOct1.image = 'camouflage.png';

const timelineItemsOct2 = new TimelineItemModel();
timelineItemsOct2.title = 'DNA Movie Quiz';
timelineItemsOct2.date = new Date('Oct 28, 2019 6:25 pm');
timelineItemsOct2.type = TimelineItemType.EasyQuiz;
timelineItemsOct2.score = 3;
timelineItemsOct2.ofScore = 10;
timelineItemsOct2.image = 'dna.png';

const timelineItemsOct3 = new TimelineItemModel();
timelineItemsOct3.title = 'Ada Lovelace Movie Quiz';
timelineItemsOct3.date = new Date('Oct 28, 2019 6:18 pm');
timelineItemsOct3.type = TimelineItemType.EasyQuiz;
timelineItemsOct3.score = 10;
timelineItemsOct3.ofScore = 10;
timelineItemsOct3.image = 'adalovelace.png';

const timelineItemsOct4 = new TimelineItemModel();
timelineItemsOct4.title = 'Ada Lovelace Related Reading';
timelineItemsOct4.date = new Date('Oct 28, 2019 4:05 pm');
timelineItemsOct4.type = TimelineItemType.RelatedReading;
timelineItemsOct4.image = 'adalovelace.png';

const timelineItemsOct5 = new TimelineItemModel();
timelineItemsOct5.title = 'Ada Lovelace Movie Project';
timelineItemsOct5.date = new Date('Oct 27, 2019 2:32 pm');
timelineItemsOct5.type = TimelineItemType.Challenge;
timelineItemsOct5.image = 'adalovelace.png';

const timelineItemsOct = new TimelineItemSetModel();
timelineItemsOct.items = [
  timelineItemsOct1,
  timelineItemsOct2,
  timelineItemsOct3,
  timelineItemsOct4,
  timelineItemsOct5];
timelineItemsOct.month = 'October';

const timelineItemsSept1 = new TimelineItemModel();
timelineItemsSept1.title = 'Dogs Make-a-Map';
timelineItemsSept1.date = new Date('Sep 29, 2019 7:18 pm');
timelineItemsSept1.type = TimelineItemType.MakeAMap;
timelineItemsSept1.image = 'dogs.png';

const timelineItemsSept2 = new TimelineItemModel();
timelineItemsSept2.title = 'Cells Challenge';
timelineItemsSept2.date = new Date('Sep 29, 2019 1:45 pm');
timelineItemsSept2.type = TimelineItemType.MakeAMap;
timelineItemsSept2.score = 10;
timelineItemsSept2.ofScore = 43;
timelineItemsSept2.image = 'cells.png';

const timelineItemsSept = new TimelineItemSetModel();
timelineItemsSept.items = [timelineItemsSept1, timelineItemsSept2];
timelineItemsSept.month = 'September';

const timelineItemsAug1 = new TimelineItemModel();
timelineItemsAug1.title = 'Camouflage Draw About It';
timelineItemsAug1.date = new Date('Aug 29, 2019 7:18 pm');
timelineItemsAug1.type = TimelineItemType.DrawAboutIt;
timelineItemsAug1.image = 'camouflage.png';

const timelineItemsAug2 = new TimelineItemModel();
timelineItemsAug2.title = 'Cells Movie';
timelineItemsAug2.date = new Date('Aug 29, 2019 6:10 pm');
timelineItemsAug2.type = TimelineItemType.Movie;
timelineItemsAug2.image = 'cells.png';

const timelineItemsAug3 = new TimelineItemModel();
timelineItemsAug3.title = 'Dogs Movie';
timelineItemsAug3.date = new Date('Aug 29, 2019 4:32 pm');
timelineItemsAug3.type = TimelineItemType.Movie;
timelineItemsAug3.image = 'dogs.png';

const timelineItemsAug = new TimelineItemSetModel();
timelineItemsAug.items = [timelineItemsAug1, timelineItemsAug2, timelineItemsAug3];
timelineItemsAug.month = 'August';

const timelineItemSets = [
  timelineItemsOct,
  timelineItemsSept,
  timelineItemsAug,
];

export default timelineItemSets;
