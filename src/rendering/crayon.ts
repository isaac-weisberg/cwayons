// type RendererTypeParameter = keyof HTMLElementTagNameMap

// type RenderOutput<K extends RendererTypeParameter> = HTMLElementTagNameMap[K]

// type Renderer<K extends RendererTypeParameter> = (tagName: K, options?: ElementCreationOptions) => RenderOutput<K>

// const _: Renderer<'div'> = document.createElement



const crayon: Crayon = function(element) {
    switch (element) {
    case 'div':
        return new HTMLDivElement()
    case undefined:
        return undefined
    }
}

export default Crayon

export { crayon, Crayon }