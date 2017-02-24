import $ from 'jquery';
import ajax from '../util/ajax';
const tplWeather = require('../templates/weather/weather.hbs');

class ViewComponent {
    constructor(data){
        this.isShow = false;
        this.url = data.url;
        this.view = data.view;
        this.list = data.list;
    }
    show(){
        this.isShow = true;
        ajax(this.url, data => {
            $(this.view).html(this.list(data));
        });
    }
    hide(){
        this.isShow = false;
        $(this.view).html('');
    }
    toggle(){
        this[!this.isShow?'show':'hide']();
    }
}

export default ViewComponent;