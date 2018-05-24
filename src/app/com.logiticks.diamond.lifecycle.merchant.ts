import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {DiamodDetails} from './com.logiticks.diamondsale.dda';
import {Person} from './composer.base';
// export namespace com.logiticks.diamond.lifecycle.merchant{
   export class Merchant extends Participant {
      companyId: string;
   }
   export class Order extends Asset {
      orderId: string;
      diamondDetails: DiamodDetails;
      amount: number;
      orderStatus: string;
      merchant: Merchant;
      orderer: Person;
   }
   export class AddProduct extends Transaction {
      productID: string;
      diamondDetails: DiamodDetails;
   }
   export class PlaceOrder extends Transaction {
      orderId: string;
      diamondDetails: DiamodDetails;
      merchant: Merchant;
      orderer: Person;
   }
   export class PlaceOrderEvent extends Event {
      orderId: string;
      diamondDetails: DiamodDetails;
   }
// }
