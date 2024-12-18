export class Community {
  id: number;
  expertId: number;
  courseId: number;
  title: string;
  description: string;
  image: string;
  status: string;
  fixedMessageId: number;
  constructor(community:{
    id: number,
    expertId: number,
    courseId: number,
    title: string,
    description: string,
    image: string,
    status: string,
    fixedMessageId: number}){
    this.id = community.id;
    this.expertId = community.expertId;
    this.courseId = community.courseId;
    this.title = community.title;
    this.description = community.description;
    this.image = community.image;
    this.status = community.status;
    this.fixedMessageId = community.fixedMessageId
  }
}
