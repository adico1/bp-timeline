import TimelineItemType from './TimelineItemType';

const TimelineItemTypeAllow = {
  Movie: {
    Score: false,
    Zoom: false,
  },
  Quiz: {
    Score: true,
    Zoom: true,
  },
  EasyQuiz: {
    Score: true,
    Zoom: true,
  },
  Challenge: {
    Score: true,
    Zoom: true,
  },
  MakeAMap: {
    Score: false,
    Zoom: true,
  },
  MakeAMovie: {
    Score: false,
    Zoom: true,
  },
  Wordplay: {
    Score: false,
    Zoom: true,
  },
  RelatedReading: {
    Score: false,
    Zoom: false,
  },
  DrawAboutIt: {
    Score: false,
    Zoom: true,
  },
  getZoomByType(type) {
    return TimelineItemTypeAllow[TimelineItemType[type]].Zoom;
  },
  getScoreByType(type) {
    return TimelineItemTypeAllow[TimelineItemType[type]].Score;
  },
};

export default TimelineItemTypeAllow;
