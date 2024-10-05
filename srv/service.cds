using { S4HANA_Joule_Product } from './external/S4HANA_Joule_Product.cds';

using { customer_loyalty as my } from '../db/schema.cds';

@path : '/service/customer_loyalty'
service customer_loyaltySrv
{
    entity Customers as
        projection on my.Customers;

    entity Purchases as
        projection on my.Purchases;

    entity Redemptions as
        projection on my.Redemptions;

    entity A_ProductBasicText as
        projection on S4HANA_Joule_Product.A_ProductBasicText;
}

annotate customer_loyaltySrv with @requires :
[
    'authenticated-user'
];
