var myApp = angular.module("meuApp", []);

myApp.controller("meuControlador", function($scope) {

    $scope.usuarios = [{
            id: 1,
            nome: "fulano",
            email: "fulano-df@hotmail.com",
            idade: "21",
            telefone: "9999999",
            cargo: "assistente"
        },
        {
            id: 2,
            nome: "ciclano",
            email: "ciclano-df@hotmail.com",
            idade: "25",
            telefone: "88888888",
            cargo: "assessor"
        }
    ];

    $scope.novoUsuario = {};
    $scope.usuarioSelecionado = {};
    var contadorID = 3;

    $scope.salvaUsuario = function() {
        //adiciona novo usuario ao array de usuarios
        $scope.novoUsuario.id = contadorID;
        $scope.usuarios.push($scope.novoUsuario);
        $scope.novoUsuario = {};
        contadorID++;
    };

    $scope.selecionaUsuario = function(usuario) {
        $scope.usuarioSelecionado = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            idade: usuario.idade,
            telefone: usuario.telefone,
            cargo: usuario.cargo
        };
    };

    $scope.atualizaUsuario = function() {

      var index = $scope.buscaUsuario($scope.usuarioSelecionado.id);
      $scope.usuarios[index] = $scope.usuarioSelecionado;
    };


    $scope.removerUsuario = function() {
        //encontra posicao do elemento selecionado no array
        var index = $scope.buscaUsuario($scope.usuarioSelecionado.id);
        //efetua exclusao
        if (index > -1) {
            $scope.usuarios.splice(index, 1);
        }
        $scope.usuarioSelecionado = {};
    };

    $scope.buscaUsuario = function(id) {
        for (var i = 0; i < $scope.usuarios.length; i++) {
            if ($scope.usuarios[i].id == id) {
                return i;
            }
        }
    };

});
