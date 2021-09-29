import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/http/services/users/users.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]]
    })
  }

  onSubmit(programForm: any) {
    let data = programForm.value;

    this.usersService.addUser(data).subscribe((res: any) => {
      console.log(res);
      alert(res.name + " - New User Created")
    })
  }

}
