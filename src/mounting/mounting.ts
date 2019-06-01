import View from "../components/View";

export default function<Props>(element: HTMLElement, view: View<Props>) {
    view.render()
}