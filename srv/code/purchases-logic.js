/**
 * 
 * @On(event = { "CREATE" }, entity = "customer_loyaltySrv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { Purchases, Customers } = cds.entities;

    // Extract the purchase data from the request
    const { purchaseValue, customer_ID } = request.data;

    // Ensure purchaseValue and customer_ID are defined
    if (purchaseValue === undefined || customer_ID === undefined) {
        return request.error(400, 'Purchase value and customer ID must be provided.');
    }

    // Calculate reward points
    const rewardPoints = Math.floor(purchaseValue / 10);

    // Update the purchase with calculated reward points
    request.data.rewardPoints = rewardPoints;

    // Fetch the related customer
    const customer = await SELECT.one.from(Customers).where({ ID: customer_ID });

    // Ensure the customer exists
    if (!customer) {
        return request.error(404, 'Customer not found.');
    }

    // Update the customer's total purchase value and total reward points
    customer.totalPurchaseValue += purchaseValue;
    customer.totalRewardPoints += rewardPoints;

    // Update the customer entity
    await UPDATE(Customers).set({
        totalPurchaseValue: customer.totalPurchaseValue,
        totalRewardPoints: customer.totalRewardPoints
    }).where({ ID: customer_ID });
};