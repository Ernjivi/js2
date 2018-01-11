"use strict";

var app = new Vue({
    el: '#app',
    data: {
        currency: 'MXN',
        cCurrency: 'BTC',
        apiUrl: 'https://min-api.cryptocompare.com/data/price?',
        amount: 0,
        convertion: 0
    },
    methods: {
        convert: function(){
            this.fetchData().then(data => {
                this.convertion = data[this.cCurrency] * this.amount;
            })
        },
        fetchData: function(){
            return this.$http.get(this.apiUrl + 'fsym=' + this.currency + '&' + 'tsyms=' + this.cCurrency)
                .then(response => response.json())
        }
    }
});