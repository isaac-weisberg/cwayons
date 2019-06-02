import Renderer, { crayon } from "../rendering/crayon";

class View<Props> {
    private readonly context: CrayonContext

    constructor(props: Props) {
        this.props = props
        // initialize data and bindings
        this.context = new CrayonContext()
    }

    props: Props

    render() {
        return <div class="fucks"/>
    }

    mount(element: HTMLElement) {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }

        const rendered = this.render()
    }
}

export default View
