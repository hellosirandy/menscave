export default class Article {
  constructor(
    subject,
    category,
    paragraphs,
    updateTime,
    createTime,
    key,
  ) {
    this.subject = subject;
    this.category = category;
    this.paragraphs = paragraphs;
    this.updateTime = updateTime;
    this.createTime = createTime;
    this.key = key;
  }

  formatDate(d) {
    let date = new Date(d);
    return `${this.processDateString(date.getMonth()+1)}/${this.processDateString(date.getDate())} ${this.processDateString(date.getHours())}:${this.processDateString(date.getMinutes())}`;
  }

  processDateString(number) {
    return number.toString().length === 2 ? number : `0${number}`;
  }
}
