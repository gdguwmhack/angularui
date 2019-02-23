import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const questions_url = "https://us-central1-gdgnodeserver.cloudfunctions.net/app/answer"

@Component({
  selector: 'qa-page',
  templateUrl: "./qa-page.component.html",
  styleUrls: ["./qa-page.component.scss"]
})
export class QaPageComponent implements OnInit, OnDestroy {
  id: any
  private sub: any
  answer: object
  answers: object[] = []
  question: any

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']
      let temp = questions_url + "/" + this.id
      this.http.get(temp).pipe().subscribe(result => {
        this.answer = result
        this.answers.push(this.answer)
      });
      let url = "https://us-central1-gdgnodeserver.cloudfunctions.net/app/question" + "/" + this.id
      this.http.get(url).pipe().subscribe(result => {
        let temp = result
        this.question = temp["question_text"]
      });
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
