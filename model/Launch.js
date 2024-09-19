class Launch {
    
    launchName;
    launchPrice;
    launchImg;
    quantityStock;

    constructor(launchName, launchPrice, launchImg, quantityStock) {
        this.launchName = launchName;
        this.launchPrice = launchPrice;
        this.launchImg = launchImg;
        this.quantityStock = quantityStock;
    }
    getLaunchName() {
        return this.launchName;
    }

    getLaunchPrice() {
        return this.launchPrice;
    }

    getLaunchImg() {
        return this.launchImg;

    }

    getQuantityStock() {
        return this.quantityStock;
    }

    setLaunchName(launchName) {
        this.launchName = launchName;
    }

    setLaunchPrice(launchPrice) {
        this.launchPrice = launchPrice;
    }

    setLaunchImg(launchImg) {
        this.launchImg = launchImg;
    }

    setQuantityStock(quantityStock) {
        this.quantityStock = quantityStock;
    }
}

export { Launch as Launch }