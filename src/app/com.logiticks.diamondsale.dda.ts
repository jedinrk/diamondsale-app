import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Person} from './composer.base';
// export namespace com.logiticks.diamondsale.dda{
   export class DiamodDetails {
      carat: number;
      clarity: string;
      Color: string;
      cut: string;
   }
   export class DiamondTransferLogEntry {
      diamond: Diamond;
      buyer: Person;
      seller: Person;
      timestamp: Date;
   }
   export abstract class DiamondTransaction extends Transaction {
      diamond: Diamond;
   }
   export class Diamond extends Asset {
      productID: string;
      diamondDetails: DiamodDetails;
      owner: Person;
      logEntries: DiamondTransferLogEntry[];
   }
// }
