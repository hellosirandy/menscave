export default class Comment {
  constructor(
    commenter,
    content,
    createTime,
    articleKey,
    reply: { updateTime: number, content: string },
    key,
  ) {
    this.commenter = commenter;
    this.content = content;
    this.createTime = createTime;
    this.articleKey = articleKey;
    if (reply) {
      this.reply = reply;
    }
    if (key) {
      this.key = key;
    }
  }

  formatDate(d) {
    let date = new Date(d);
    return `${this.processDateString(date.getMonth()+1)}/${this.processDateString(date.getDate())} ${this.processDateString(date.getHours())}:${this.processDateString(date.getMinutes())}`;
  }

  processDateString(number) {
    return number.toString().length === 2 ? number : `0${number}`;
  }
}
