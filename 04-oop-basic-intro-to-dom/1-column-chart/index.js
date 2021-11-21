export default class ColumnChart {
    constructor(
        {
            data = [],
            label = "Test",
            value = 344,
            link = "",            
            chartHeight = 50,
            formatHeading
        } = {
                data: [],
                label: "Test",
                value: 344,
                link: "",
                chartHeight: 50,
                formatHeading: data => `$${data}`             
            }
    ) {
        this.data = data;
        this.label = label;
        this.value = value;
        this.link = link;
        this.chartHeight = chartHeight;
        this.formatHeading = formatHeading;
        this.render();
        this.initEventListeners();
        this.remove();
        this.destroy();
    }

    getTemplate(newData) {
        function getColumnProps(data) {
            const maxValue = Math.max(...data);
            const scale = 50 / maxValue;

            return data.map(item => {
                return {
                    percent: (item / maxValue * 100).toFixed(0) + '%',
                    value: String(Math.floor(item * scale))
                };
            });
        }
        const arrColumn = newData ? getColumnProps(newData) : getColumnProps(this.data);
        return `
        this.chartHeight = 50;
            <div class="column-chart ${(this.data.length === 0) ? 'column-chart_loading' : ''}" style="--chart-height: ${this.chartHeight}">
                <div class="column-chart__title">
                    Total ${this.label}
                    ${this.link ? `<a href="${this.link}" class="column-chart__link">View all</a>` : ''}
                </div>
                <div class="column-chart__container">
                    <div data-element="header" class="column-chart__header">${this.formatHeading ? this.formatHeading(this.value) : `${this.value}`}</div>
                    <div div data-element="body" class="column-chart__chart">
                    ${(arrColumn.map(item => {
            return `<div style="--value: ${item.value}" data-tooltip="${item.percent}"></div>`
        })).join('')}
                    </div>
                </div>
            </div>
            `
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = this.getTemplate();
        this.element = element.firstElementChild;
    }

    initEventListeners() {
    }

    remove() {
        this.element.remove();
    }

    destroy() {
        this.remove();
    }

    update(newData) {
        const element = document.createElement('div');
        element.innerHTML = this.getTemplate(newData);
        this.element = element.firstElementChild;
    }

}
