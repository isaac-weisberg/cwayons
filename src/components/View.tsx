class View<Props> {
    constructor(props: Props) {
        this.props = props
        // initialize data and bindings
    }

    props: Props

    render() {
        return undefined
    }

    mount(element: HTMLElement) {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }

        const rendered = this.render()
        if (!rendered) {
            return
        } else {
            element.appendChild(rendered)
        }
    }
}

export default View
