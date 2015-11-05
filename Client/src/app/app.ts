import {Component, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    templateUrl: 'app/Template.html',
    directives: [CORE_DIRECTIVES]
})

export class AppComponent {
  title = 'Remote File Manager';
  myLeftLocation = 'C:\\';
  myRightLocation = 'D:\\';
  drives = ['C', 'D', 'E', 'F'];

  leftLocations = [
    { "name" : "dir1", "size": 0, "type": "Directory" },
    { "name" : "dir2", "size": 1100, "type": "Directory" },
    { "name" : "file1", "size": 1048576, "type": "File" },
    { "name" : "file2", "size": 1234, "type": "File" },
  ];

  rightLocations = [
    { "name" : "dir100", "size": 0, "type": "Directory" },
    { "name" : "dir101", "size": 1100, "type": "Directory" },
    { "name" : "file100", "size": 1048576, "type": "File" },
    { "name" : "file101", "size": 1234, "type": "File" },
  ];
}

class Location {
  name: string;
  fullPath: string;
  size: number;
  type: string;

}

bootstrap(AppComponent);
