using { S4HANA_Joule_Product } from '../srv/external/S4HANA_Joule_Product.cds'; 
namespace customer_loyalty;
using { cuid } from '@sap/cds/common';

entity Customers : cuid {
  name: String(255);
  email: String(255);
  customerNumber: Integer;
  totalPurchaseValue: Integer;
  totalRewardPoints: Integer;
  totalRedeemedRewardPoints: Integer;
}

entity Purchases : cuid {
  purchaseValue: Integer;
  rewardPoints: Integer;
  selectedProduct: String(255);
  customer: Association to Customers;
}

entity Redemptions : cuid {
  redeemedAmount: Integer;
  customer: Association to Customers;
}

