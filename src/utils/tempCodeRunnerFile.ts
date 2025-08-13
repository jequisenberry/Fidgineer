export enum PageCommpent {
    MainContainer   = "main-container",
    Header          = "header",
    Main            = "main",
    Footer          = "footer"
}

type ClassName = {
    className:string
}

type ComponentClasses = {
    mainContainer?  : ClassName[];
    headerClass?    : ClassName[];
    mainClass?      : ClassName[];
    footerClass?    : ClassName[];
} 

type MainContents = {
    mainContents    :HTMLElement[]
}

export type Options = {
    componentClasses?   : ComponentClasses,
    mainContents?       : MainContents[],
}

export function renderPage( Options?: Options, clear: boolean = true ): void {
    
    const body = document.querySelector("body") as HTMLBodyElement;
    if (!body) throw new Error("renderPage: body not found");
    if (clear) body.innerHTML = "";

    // Main container
    const mainContainer = document.createElement("div");
    mainContainer.className = PageCommpent.MainContainer;
    
    if (Options?.componentClasses?.mainContainer?.length)
        mainContainer.classList.add(...Options?.componentClasses?.mainContainer)
        
