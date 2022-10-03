import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

var articles = [
  {
    id: 1,
    name: 'ความเป็นมาของภาษา Typescript',
    img: '',
    description: 'บทความนี้จะพูดถึงเรื่องความเป็นมาของภาษา Typescript และเหตุผลที่ทำให้มันถูกสร้างขึ้นมา',
    data: `<h1>ยังไม่ได้หาเนื้อหาครับ ใจเย็น ๆ</h1>`
  },
  {
    id: 2,
    name: 'อะไรคือ OSI Model ?',
    img: '',
    description: 'บทความนี้จะเกี่ยวกับเรื่อง OSI Model และการทำงานของเครือข่าย',
    data: `<h1>ยังไม่ได้หาเนื้อหาครับ ใจเย็น ๆ</h1>`
  },
  {
    id: 3,
    name: 'ประวัติของระบบปฏิบัติการ Windows',
    img: '',
    description: 'บทความนี้จะพูดถึงเรื่องประวัติของระบบปฏิบัติการ Windows และเหตุผลที่ทำให้มันถูกสร้างขึ้นมา',
    data: `<h1>ยังไม่ได้หาเนื้อหาครับ ใจเย็น ๆ</h1>`
  },
  {
    id: 4,
    name: 'ทำไมต้องใช้ Linux ?',
    img: '',
    description: 'บทความนี้จะพูดถึงเรื่องทำไมต้องใช้ Linux และเหตุผลที่ทำให้มันถูกสร้างขึ้นมา',
    data: `<h1>ยังไม่ได้หาเนื้อหาครับ ใจเย็น ๆ</h1>`
  },
  {
    id: 5,
    name: 'Mainframe คืออะไร ?',
    img: '',
    description: 'บทความนี้จะพูดถึงเรื่อง Mainframe ว่าคืออะไร และการทำงานของมัน',
    data: `<h1>ยังไม่ได้หาเนื้อหาครับ ใจเย็น ๆ</h1>`
  },
  {
    id: 6,
    name: 'กำเนิดภาษางูหลาม',
    img: '',
    description: 'บทความนี้จะพูดถึงเรื่องกำเนิดภาษา Python และเหตุผลที่ทำให้มันถูกสร้างขึ้นมา',
    data: `<h1>ยังไม่ได้หาเนื้อหาครับ ใจเย็น ๆ</h1>`
  },
];

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles_array = articles
  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-articles-data',
  templateUrl: './articles_data.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesDetaComponent implements OnInit {
  article_id: Number = 0;
  article_data: any = new Array()
  found_data = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article_id = Number(this.route.snapshot.paramMap.get('id'))
    this.article_data = articles.find((act) => { return this.article_id == act.id })
    if (this.article_data != undefined) {
      this.found_data = true;
    } else {
      this.found_data = false;
    }
  }

}
