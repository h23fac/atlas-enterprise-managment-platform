import { Component, } from '@angular/core';
import { AtlasInputEmail } from "../../ui/inputs/atlas-input-email/atlas-input-email";
import { AtlasInputPwd } from "../../ui/inputs/atlas-input-pwd/atlas-input-pwd";
import { AtlasButtonConfirm } from "../../ui/buttons/atlas-button-confirm/atlas-button-confirm";




@Component({
  selector: 'login-atlas-enterprise',
  imports: [AtlasInputEmail, AtlasInputPwd, AtlasButtonConfirm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginAtlasEnterprise {
}
