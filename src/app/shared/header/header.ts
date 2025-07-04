import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-header',
  imports: [CommonModule ,NzButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isAtTop = true;
}
