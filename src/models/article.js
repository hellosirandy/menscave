export default class Article {
  constructor(
    subject,
    category,
    paragraphs,
    updateTime,
    createTime,
  ) {
    this.subject = subject;
    this.category = category;
    this.paragraphs = paragraphs;
    this.updateTime = updateTime;
    this.createTime = createTime;
  }
}
