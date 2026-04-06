export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                    console.log("Resolve success for Catalog"),
                ]);
            } else {
                console.log("Im in the reject block for Catalog")
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

export const fetchProductReviews = (productId: number): Promise<{ id: number; review: string; }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, review: "Great item" },
                    { id: 2, review: "Could be better" },
                    console.log("Resolve success for Reviews"),
                ]);
            } else {
                 console.log("Im in the reject block for Reviews")
                reject("Failed to fetch product review for product ID ${productID}");
            }
        }, 1500);
    });
};


export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { totalSales: 1000, unitsSold: 50, averagePrice: 25 },
            { totalSales: 5000, unitsSold: 30, averagePrice: 10 },
            console.log("Resolve success for Sales report"),
        ]);
        } else {
             console.log("Im in the reject block Sates Report")
        reject("Failed to fetch sales report");
        }
    }, 1000);
    });
};
fetchProductCatalog();
fetchProductReviews(1);
fetchSalesReport();