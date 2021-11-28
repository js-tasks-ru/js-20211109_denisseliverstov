export default class NotificationMessage {
    static activeNotificsation;

    element;
    timerId;

    constructor(
        message = '',
        {
            duration = 0,
            type = ""
        } = {}
    ) {
        this.message = message;
        this.durationInSeconds = (duration/1000 + 's');
        this.type = type;
        this.duration = duration;

        this.render();
    }

    get template() {
        return `
        <div class="notification ${this.type}" style="--value:${this.durationInSeconds}">
            <div class="timer"></div>
            <div class="inner-wrapper">
                <div class="notification-header">${this.type}</div>
                <div class="notification-body">
                    ${this.message}
                </div>
            </div>
        </div>
        `
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = this.template;
        this.element = element.firstElementChild;
    }

    show(parent = document.body) {
        if (NotificationMessage.activeNotificsation) {
            NotificationMessage.activeNotificsation.remove();
        }

        parent.append(this.element);
        this.timerId = setTimeout (()=>{
            this.remove();
        }, this.duration);

        NotificationMessage.activeNotificsation = this;

    }

    remove() {
        clearTimeout(this.timerId);
        if (this.element) {
            this.element.remove();
        }
    }

    destroy() {
        this.remove();
        this.element = null;
        NotificationMessage.activeNotificsation = null;
    }

}
