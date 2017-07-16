(function() {
  'use strict';

  angular.module('app')
    .component('itemList', {
      controller: itemListController,
      templateUrl: '/js/item/itemList.template.html'
    });

    itemListController.$inject = ['$http', 'itemService'];

    function itemListController($http, itemService){
      const vm = this;

      vm.newItemForm = false;
      vm.$onInit = $onInit;
      vm.createItem = createItem;
      vm.openForm = openForm;

      vm.itemService = itemService;


      // function $onInit(){
      //   $http.get('/classifieds')
      //     .then((response) => {
      //       vm.items = response.data;
      //     });
      // }

      function $onInit(){
        itemService.getItems()
          .then((items) =>{
            vm.items = items;
          });
      }

      // function createItem(){
      //   $http.post('/classifieds', vm.item)
      //     .then((response) => {
      //       vm.items.push(response.data);
      //       vm.newItemForm = false;
      //       delete vm.item;
      //     });
      // }

      function createItem(){
        $http.post('/classifieds', vm.item)
          .then((response) => {
            vm.items.push(response.data);
            vm.newItemForm = false;
            delete vm.item;
          });
      }

      function openForm(){
        vm.newItemForm = !vm.newItemForm;
      }

    }

}());
