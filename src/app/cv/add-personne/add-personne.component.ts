import {Component, OnInit} from '@angular/core';
import {CvService} from '../services/cv.service';
import {Personne} from '../Model/personne';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {


  constructor(private cvservice: CvService, private  router: Router) {
  }

  ngOnInit() {
  }

  addPersonne(formulaire: NgForm) {
    this.cvservice.addPersonne(formulaire.value).subscribe(
      reponse => this.router.navigate([''])
    );
  }
}
