import $ from 'jquery';
const tplWeather = require('./templates/weather/weather.hbs');
const tplList = require('./templates/list.hbs');
const tplMain = require('./templates/main.hbs');
const list = require('./json/drawer-list.json');
import ViewComponent from './component/ViewComponent';

const weatherComponent = new ViewComponent({
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=seoul&mode=json&units=metric&cnt=7&apikey=8d554a626fc5d01d77812b612a6de257',
    view: '[data-view="weather"]',
    list: (data) => {
        return tplWeather({
            weather: data.list.map(v => {
                return {
                    date: new Date(v.dt * 1000),
                    temp: Math.round(v.temp.day)
                }
            })
        })
    }
});

const DOM = {
    weatherBtn: '[data-btn="weather"]',
    drawerList: '[data-view="list"]'
};

$('#root').html(tplMain({}));
$(DOM.drawerList).html(tplList({
    list: list
}));

$(DOM.weatherBtn).click(() => {
    weatherComponent.toggle();
});