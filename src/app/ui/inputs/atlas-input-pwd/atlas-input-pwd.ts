import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'atlas-input-pwd',
  imports: [TitleCasePipe],
  templateUrl: './atlas-input-pwd.html',
  styleUrl: './atlas-input-pwd.scss',
})
export class AtlasInputPwd {
  namePwd: string = 'password';
}
