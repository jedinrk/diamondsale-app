import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace composer.base{
   export abstract class Person extends Participant {
      name: string;
      contactDetails: ContactDetails;
   }
   export class ContactDetails {
      email: string;
      mobilePhone: string;
      homePhone: string;
      address: Address;
   }
   export class Address {
      city: string;
      country: string;
      locality: string;
      region: string;
      street: string;
      street2: string;
      street3: string;
      postalCode: string;
      postOfficeBoxNumber: string;
   }
// }
