import { Component } from '@angular/core';

@Component({
  selector: 'app-firestorage',
  templateUrl: './firestorage.component.html',
  styleUrls: ['./firestorage.component.scss'],
})
export class FirestorageComponent {
  test = true;

  constructor() {}

  selectedFile!: File;
  imageSrc!: any;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  upload() {}
  /*   upload(): void {
    if (this.selectedFile) {
      const filePath = `uploads/${Date.now()}_${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedFile);

      // Optional: Track the upload progress
      task.percentageChanges().subscribe((percentage) => {
        console.log(`Upload progress: ${percentage}%`);
      });

      // Get the download URL after the upload is complete
      task.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          this.imageSrc = url;
          console.log('File available at: ', this.imageSrc);
        });
      });
    }
  } */
}
