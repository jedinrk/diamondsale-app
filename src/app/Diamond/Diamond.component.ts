import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DiamondService } from './Diamond.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Diamond',
	templateUrl: './Diamond.component.html',
	styleUrls: ['./Diamond.component.css'],
  providers: [DiamondService]
})
export class DiamondComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          productID = new FormControl("", Validators.required);
        
  
      
          diamondDetails = new FormControl("", Validators.required);
        
  
      
          owner = new FormControl("", Validators.required);
        
  
      
          logEntries = new FormControl("", Validators.required);
        
  


  constructor(private serviceDiamond:DiamondService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          productID:this.productID,
        
    
        
          diamondDetails:this.diamondDetails,
        
    
        
          owner:this.owner,
        
    
        
          logEntries:this.logEntries
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceDiamond.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.logiticks.diamondsale.dda.Diamond",
      
        
          "productID":this.productID.value,
        
      
        
          "diamondDetails":this.diamondDetails.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "logEntries":this.logEntries.value
        
      
    };

    this.myForm.setValue({
      
        
          "productID":null,
        
      
        
          "diamondDetails":null,
        
      
        
          "owner":null,
        
      
        
          "logEntries":null
        
      
    });

    return this.serviceDiamond.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "productID":null,
        
      
        
          "diamondDetails":null,
        
      
        
          "owner":null,
        
      
        
          "logEntries":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.logiticks.diamondsale.dda.Diamond",
      
        
          
        
    
        
          
            "diamondDetails":this.diamondDetails.value,
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "logEntries":this.logEntries.value
          
        
    
    };

    return this.serviceDiamond.updateAsset(form.get("productID").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceDiamond.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceDiamond.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "productID":null,
          
        
          
            "diamondDetails":null,
          
        
          
            "owner":null,
          
        
          
            "logEntries":null 
          
        
      };



      
        if(result.productID){
          
            formObject.productID = result.productID;
          
        }else{
          formObject.productID = null;
        }
      
        if(result.diamondDetails){
          
            formObject.diamondDetails = result.diamondDetails;
          
        }else{
          formObject.diamondDetails = null;
        }
      
        if(result.owner){
          
            formObject.owner = result.owner;
          
        }else{
          formObject.owner = null;
        }
      
        if(result.logEntries){
          
            formObject.logEntries = result.logEntries;
          
        }else{
          formObject.logEntries = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "productID":null,
        
      
        
          "diamondDetails":null,
        
      
        
          "owner":null,
        
      
        
          "logEntries":null 
        
      
      });
  }

}
