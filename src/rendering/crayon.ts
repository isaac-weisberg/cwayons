type RendererTypeParameter = keyof HTMLElementTagNameMap

type RenderOutput<K extends RendererTypeParameter> = HTMLElementTagNameMap[K]

type Renderer<K extends RendererTypeParameter> = (tagName: K, options?: ElementCreationOptions) => RenderOutput<K>

const _: Renderer<'div'> = document.createElement

const crayon = document.createElement

export default Renderer

export { crayon }