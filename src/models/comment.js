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
    const current = new Date();
    const date = new Date(d);
    const minute = 60000, hour = 3600000, day = 86400000;
    const diff = current.getTime() - date.getTime();
    if (diff < minute) {
      return 'few seconds ago';
    } else if (diff < hour) {
      const diffMinute = current.getMinutes() - date.getMinutes();
      return `${diffMinute} ${diffMinute > 1 ? 'minutes' : 'minute'} ago`;
    } else if (diff < day) {
      const diffHour = current.getMinutes() - date.getMinutes();
      return `${diffHour} ${diffHour > 1 ? 'hours' : 'hour'} ago`;
    }
    return this.getExactDate(date);
  }

  getExactDate(date) {
    return `${this.processDateString(date.getMonth()+1)}/${this.processDateString(date.getDate())} ${this.processDateString(date.getHours())}:${this.processDateString(date.getMinutes())}`;
  }

  processDateString(number) {
    return number.toString().length === 2 ? number : `0${number}`;
  }
}
