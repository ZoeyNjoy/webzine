  
$scope.save = function () {
    $http({method: 'POST',
    url: "http://localhost:51739/PostFileWithData",
    headers: { 'Content-Type': undefined },
    transformRequest: function (data) {
      var formData = new FormData();
      formData.append("model", angular.toJson(data.model));
      for (var i = 0; i < data.files.length; i++) {
        formData.append("file" + i, data.files[i]);
      }return formData;
    },data: { model: $scope.jsonData, files: $scope.files }
  }).success(function (data, status, headers, config) {
    alert("success!");}).error(function (data, status, headers, config){
      alert("failed!");
    });
  };