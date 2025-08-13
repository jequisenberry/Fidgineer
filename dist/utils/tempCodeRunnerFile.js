export var PageCommpent;
(function (PageCommpent) {
    PageCommpent["MainContainer"] = "main-container";
    PageCommpent["Header"] = "header";
    PageCommpent["Main"] = "main";
    PageCommpent["Footer"] = "footer";
})(PageCommpent || (PageCommpent = {}));
export function renderPage(Options, clear = true) {
    var _a, _b, _c;
    const body = document.querySelector("body");
    if (!body)
        throw new Error("renderPage: body not found");
    if (clear)
        body.innerHTML = "";
    // Main container
    const mainContainer = document.createElement("div");
    mainContainer.className = PageCommpent.MainContainer;
    if ((_b = (_a = Options === null || Options === void 0 ? void 0 : Options.componentClasses) === null || _a === void 0 ? void 0 : _a.mainContainer) === null || _b === void 0 ? void 0 : _b.length)
        mainContainer.classList.add(...(_c = Options === null || Options === void 0 ? void 0 : Options.componentClasses) === null || _c === void 0 ? void 0 : _c.mainContainer);
}
