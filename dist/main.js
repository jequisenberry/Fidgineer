var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DataHandler } from "./dataHandler.js";
import { route } from "./router.js";
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const body = document.querySelector('body');
            if (!body)
                throw new Error("Body not found!");
            const dataHandler = DataHandler.getInstance();
            yield dataHandler.load();
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
    });
}
document.addEventListener("DOMContentLoaded", init);
