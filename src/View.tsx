class View<Props> {
    constructor(props: Props) {
        this.props = props
    }

    props: Props

    render() {
        return <div class="fucks"/>
    }

    mount(element: HTMLElement) {
        const tree = this.render()
        element.appendChild(tree)
    }
}

export default View
