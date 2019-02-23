import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';

const TEST_DATA: object[] = [
  { question_text: "This is an example question 1", id: "12121231232123", topic: "Example", timestamp: "01/20/2019" },
  { question_text: "This is an example question 2", id: "12121231232124", topic: "Example", timestamp: "01/21/2019" },
  { question_text: "This is an example question 3", id: "12121231232125", topic: "Example", timestamp: "01/22/2019" },
  { question_text: "This is an example question 4", id: "12121231232126", topic: "Example", timestamp: "01/23/2019" },
  { question_text: "This is an example question 5", id: "12121231232127", topic: "Example", timestamp: "01/24/2019" },
  { question_text: "This is an example question 5", id: "12121231232127", topic: "Example", timestamp: "01/24/2019" },
  { question_text: "This is an example question 5", id: "12121231232127", topic: "Example", timestamp: "01/24/2019" },
  { question_text: "This is an example question 5", id: "12121231232127", topic: "Example", timestamp: "01/24/2019" },
  { question_text: "This is an example question 5", id: "12121231232127", topic: "Example", timestamp: "01/24/2019" },
  { question_text: "This is an example question 5", id: "12121231232127", topic: "Example", timestamp: "01/24/2019" },
  { question_text: "This is an example question 5", id: "12121231232127", topic: "Example", timestamp: "01/24/2019" },
  { question_text: "This is an example question 5", id: "12121231232127", topic: "Example", timestamp: "01/24/2019" },
];

const questions_url = "https://us-central1-gdgnodeserver.cloudfunctions.net/app/questions"

/**
 * @title Table with filtering
 */
@Component({
  selector: 'gdgwiki-question-listing',
  styleUrls: ['gdg-wiki-question-listing.component.scss'],
  templateUrl: 'gdg-wiki-question-listing.component.html',
})
export class GdgWikiQuestionListingComponent implements OnInit {
  displayedColumns: string[] = ['question_text', 'topic', 'timestamp'];
  questions: any = []
  dataSource: any = []

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(questions_url).pipe().subscribe(result => {
      this.questions = result["questions"]
      this.dataSource = new MatTableDataSource(this.questions)
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleClick($event) {
    let name = String($event.toElement.firstChild.textContent)
    name = name.trim()
    let id = ""
    for (let tmp in this.questions) {
      let obj = this.questions[tmp]
      let txt = obj.question_text
      if (txt.trim() === name) {
        id = obj.id
        break
      }
    }
    let url = "/question/" + id
    this.router.navigateByUrl(url)
  }
}