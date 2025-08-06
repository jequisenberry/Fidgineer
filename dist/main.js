import { DataHandler } from "./data/dataHandler.js";
import { route } from "./router.js";
async function init() {
    try {
        const dataHandler = DataHandler.getInstance();
        await dataHandler.load();
        // test if data is loaded
        const inventory = dataHandler.getInventory();
        const siteConfig = dataHandler.getSiteConfig();
        console.log("Inventory:", inventory);
        console.log("Site Config:", siteConfig);
        route();
        window.addEventListener("hashchange", route);
    }
    catch (error) {
        console.error("main: Error during initialization:", error);
    }
}
document.addEventListener("DOMContentLoaded", init);
