class View<Props> {
    private readonly context: CrayonContext

    constructor(props: Props) {
        this.props = props
        // initialize data and bindings
        const initialRender = this.render()
        this.context = new CrayonContext(initialRender)
    }

    props: Props

    render() {
        return <div class="fucks"/>
    }
}

export default View
