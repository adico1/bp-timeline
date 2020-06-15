export default class FileUtil {
  static getFilename(fullPath) {
    return fullPath.replace(/^.*[\\/]/, '');
  }
}
