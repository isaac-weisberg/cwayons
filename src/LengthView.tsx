import View from './components/View'

export class LengthView extends View<{ length: number}> {
    render() {
        return <div>Length is equal to</div>
    }
}