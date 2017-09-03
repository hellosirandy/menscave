export default class Paragraph {
  constructor(
    title,
    type,
    content,
    key,
  ) {
    this.title = title;
    this.type = type;
    if (content) {
      this.content = content;
    } else {
      if (type === 'single' || type === 'image' || type === 'video') {
        this.content = '';
      } else if (type === 'split') {
        this.content = { english: '', chinese: ''};
      }
    }
    this.key = key;
  }
}
