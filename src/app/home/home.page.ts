import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// Add BarcodeScanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DataServiceService } from '../data-service.service';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
  
})
export class HomePage {

  products: any[] = [];
selectedProduct: any;
productFound:boolean = false;

constructor(public navCtrl: NavController,
  private barcodeScanner: BarcodeScanner,
  private toast: Toast,
  public dataService: DataServiceService) {

    this.dataService.getListDetails()
  .subscribe((response)=> {
      this.products = response
      console.log(this.products);
  });

  }

  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
      if(this.selectedProduct !== undefined) {
        this.productFound = true;
      } else {
        this.productFound = false;
        this.toast.show(`Product not found`, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
}
