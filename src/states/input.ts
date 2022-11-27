export default class InputHandler {
    public lastKey !: string;
    constructor() {
        window.addEventListener("keydown", (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.lastKey = "PRESS left"
                    break;
                case "ArrowRight":
                    this.lastKey = "PRESS right"
                    break;
                default:
                    this.lastKey = ""
            }

        })
        window.addEventListener("keyup", (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.lastKey = "RELEASE left"
                    break
                case "ArrowRight":
                    this.lastKey = "RELEASE right"
                    break
                default:
                    this.lastKey = ""
                    break
            }

        })
        console.log(this.lastKey)
    }
}
