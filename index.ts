import fs from "fs";
import { fetchProductCatalog } from "./apiSimulator";
import { fetchProductReviews } from "./apiSimulator";
import { fetchSalesReport } from "./apiSimulator";

// Get Product Catalog
fetchProductCatalog()
    .then((data) => {
        console.log(data);

        // Get product reviews
        for (let i=0; i<data.length; i++) {
           fetchProductReviews(data[i].id)
                .then((review) => {
                console.log(review);
            })

            // Issue error for failure to retrieve reviews
            .catch((error) => {
                console.log("An error occured:", error)
            })
        }
    })
    // Issue error message for failed catalogue retrieval
    .catch((error) => {
        console.error("An error occurred:", error);
    });



