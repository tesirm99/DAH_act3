import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';
@Component({
  selector: 'app-wip',
  templateUrl: './wip.page.html',
  styleUrls: ['./wip.page.scss'],
})
export class WipPage implements OnInit {

  constructor() { }

  wipMocks = [
    {
      title: 'WIP 1',
      description: 'This is a WIP 1',
      image: 'https://picsum.photos/200/300'
    },
    {
      title: 'WIP 2',
      description: 'This is a WIP 2',
      image: 'https://picsum.photos/200/300'
    },
    {
      title: 'WIP 3',
      description: 'This is a WIP 3',
      image: 'https://picsum.photos/200/300'
    },
    {
      title: 'WIP 4',
      description: 'This is a WIP 4',
      image: 'https://picsum.photos/200/300'
    },
    {
      title: 'WIP 5',
      description: 'This is a WIP 5',
      image: 'https://picsum.photos/200/300'
    },
  ]
  async ngOnInit() { }

  async showToast() {
    await Toast.show({
      text: 'Work in progress...',
      duration: 'short',
      position: 'bottom'
    })
  }
}
