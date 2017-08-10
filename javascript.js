angular.module("app", []);
angular.module("app").controller("appCtrl", function ($scope) {
	$scope.app = "Calculadora";
	$scope.valor1 = [];
	$scope.resultado = 0;

	$scope.somar = function(valor1){
		$scope.valorUm = $scope.valor1;
		$scope.operacao = 1; 
		$scope.valor1 = "";

	};
	$scope.subtrair = function(valor1){
		$scope.valorUm = $scope.valor1;
		$scope.operacao = 2; 
		$scope.valor1 = "";
	};
	$scope.multiplicar = function(valor1){
		$scope.valorUm = $scope.valor1;
		$scope.operacao = 3; 
		$scope.valor1 = "";
	};

	$scope.dividir = function(valor1){
		$scope.valorUm = $scope.valor1;
		$scope.operacao = 4; 
		$scope.valor1 = "";
	};
	$scope.raizQuadrada = function(valor1){
		$scope.valorUm = $scope.valor1;
		$scope.operacao = 5; 
		$scope.btn_resultado();

	};
	$scope.porcento = function(valor1){
		$scope.valorUm = $scope.valor1;
		$scope.operacao = 6; 
		$scope.valor1 = "";
	};
	$scope.elevacao = function(valor1){
		$scope.valorUm = $scope.valor1;
		$scope.operacao = 7; 
		$scope.valor1 = "";

	};

	$scope.btn_resultado = function(valor1,valorUm){
		$scope.valorUm = Number($scope.valorUm);
		$scope.valor1 = Number($scope.valor1);

	switch($scope.operacao){

	case 1:
		$scope.resultado = $scope.valorUm + $scope.valor1;
		return $scope.resultado;
		break;
	case 2:
		$scope.resultado = $scope.valorUm - $scope.valor1;
		return $scope.resultado;
		break;
	case 3:
		$scope.resultado = $scope.valorUm * $scope.valor1;
		return $scope.resultado;
		break;
	case 4:
		$scope.resultado = $scope.valorUm / $scope.valor1;
		return $scope.resultado;
		break;
	case 5:
		$scope.resultado = Math.sqrt($scope.valorUm);
		return $scope.resultado;
		break;
	case 6:
		$scope.resultado = ($scope.valorUm/100) * $scope.valor1;
		return $scope.resultado;
		break;
	case 7:
		$scope.resultado = Math.pow($scope.valorUm,$scope.valor1);
		return $scope.resultado;
		break;
	default:
		break;
	};
};

	$scope.resetar = function(){
		$scope.valor1 = "";
		$scope.operacao = 0;
		$scope.resultado = 0;
	};
	$scope.numeroTeclado0 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn0').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTeclado1 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn1').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTeclado2 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn2').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTeclado3 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn3').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTeclado4 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn4').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTeclado5 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn5').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTeclado6 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn6').innerHTML;
		return Number($scope.valor1);
	};	
	$scope.numeroTeclado7 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn7').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTeclado8 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn8').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTeclado9 = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btn9').innerHTML;
		return Number($scope.valor1);
	};
	$scope.numeroTecladoPonto = function(){
		$scope.valor1 = String($scope.valor1);
		$scope.valor1 = String($scope.valor1) + document.getElementById('btnponto').innerHTML;
		return Number($scope.valor1);
	};

	
});