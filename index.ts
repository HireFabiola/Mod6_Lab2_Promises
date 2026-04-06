import fs from "fs";
import { fetchProductCatalog } from "./apiSimulator";
import { fetchProductReviews } from "./apiSimulator";
import { fetchSalesReport } from "./apiSimulator";

// Get Product Catalog
fetchProductCatalog()
    .then((data) => {
        console.log(data);

        // Get product reviews as long as catalogue is successfully retrieved
        fetchProductReviews(3)
            .then((review) => {
                console.log(review);
            })
            .catch((error) => {
                console.log("An error occurred:", error);
            })

        // Get sales report provided no failures in prior fetches
        fetchSalesReport()
            .then((salesData) => {
                console.log(salesData);
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            })
    })
    // Issue error message for failed catalogue retrieval
    .catch((error) => {
        console.error("An error occurred:", error);
    })

    // Final log message indicating all calls have been attempted wether successful or not
    .finally(() => {
    console.log("All API calls attempted");
});
