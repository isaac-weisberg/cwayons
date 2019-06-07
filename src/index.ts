import { LengthView } from "./LengthView";

const view = new LengthView({ length: 3 })

const root = document.getElementById("root") 

view.mount(root)
