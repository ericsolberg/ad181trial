/**
 * 
 * @On(event = { "CREATE" }, entity = "customer_loyaltySrv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
    const { Redemptions, Customers } = cds.entities;

    const redemptionData = request.data;
    if (!redemptionData || !redemptionData.customer_ID || !redemptionData.redeemedAmount) {
        return request.error(400, "Invalid redemption data");
    }

    const customerId = redemptionData.customer_ID;
    const redeemedAmount = redemptionData.redeemedAmount;

    // Fetch the customer record
    const customer = await SELECT.one.from(Customers).where({ ID: customerId });
    if (!customer) {
        return request.error(404, "Customer not found");
    }

    // Update the customer's reward points
    const updatedCustomer = {
        totalRewardPoints: customer.totalRewardPoints - redeemedAmount,
        totalRedeemedRewardPoints: customer.totalRedeemedRewardPoints + redeemedAmount
    };

    // Ensure the totalRewardPoints does not go negative
    if (updatedCustomer.totalRewardPoints < 0) {
        return request.error(400, "Insufficient reward points");
    }

    // Update the customer record
    await UPDATE(Customers).set(updatedCustomer).where({ ID: customerId });
};