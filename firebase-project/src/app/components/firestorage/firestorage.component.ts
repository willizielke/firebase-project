import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-firestorage',
  templateUrl: './firestorage.component.html',
  styleUrls: ['./firestorage.component.scss'],
})
export class FirestorageComponent {
  test = true;

  constructor(private storage: AngularFireStorage) {}

  selectedFile!: File;
  imageSrc!: any;
  imageSrcUpload!: string;
  allowedFileTypes: string[] = ['image/jpeg', 'image/png', 'image/gif'];

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (
      file &&
      this.allowedFileTypes.includes(file.type)
    ) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      alert('Bitte wählen Sie ein Bild aus!');
    }
  }

  upload(): void {
    if (this.selectedFile) {
      const filePath = `uploads/${Date.now()}_${this.selectedFile.name}`;
      const task = this.storage.upload(filePath, this.selectedFile);

      // Get the download URL after the upload is complete
      task.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          this.imageSrcUpload = url;
        });
      });
    }
  }
}
