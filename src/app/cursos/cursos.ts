import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.html',
  styleUrl: './cursos.scss'
})
export class Cursos implements OnInit {
  cursos: string[];
  nomePortal: string;

  constructor() {
    this.nomePortal = 'http://www.cursos.com';
    this.cursos = ["Java", "Angular", "TypeScript", "JavaScript"];
  }

  ngOnInit(): void {
    for (let i = 0; i < this.cursos.length; i++) {
      const curso = this.cursos[i];
      console.log(curso);
    }
  }
}
