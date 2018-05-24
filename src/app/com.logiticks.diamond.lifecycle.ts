import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {ContactDetails} from './composer.base';
import {Person} from './composer.base';

// export namespace com.logiticks.diamond.lifecycle{
   export class PrivateOwner extends Person {
      email: string;
   }
   export class Company extends Participant {
      companyId: string;
   }
// }
