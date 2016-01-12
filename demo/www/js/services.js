/* global angular, document, window */
'use strict';

angular.module('starter.services', [])

.factory('PurchaseService', function() {
       // Might use a resource here that returns a JSON array

       // Some fake testing data
       var purchases = [];

       return {
         all: function() {
           return purchases;
         },
         total: function() {
            var total = 0;
            for (var i = 0; i < purchases.length; i++) {
              total += purchases[i].price;
            }
            return total;
         },
         remove: function(purchase) {
           purchases.splice(purchases.indexOf(purchase), 1);
         },
         get: function(purchaseId) {
           for (var i = 0; i < purchases.length; i++) {
             if (purchases[i].id === parseInt((purchaseId))) {
               return purchases[i];
             }
           }
           return null;
         },
         addPurchase: function(item, price, image) {
            var purchase = {
                item: item,
                price: price,
                image: image
            }

            purchase.time = new Date().getTime();

            purchases.push(purchase);
         }
       };
     });