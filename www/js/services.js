


angular.module('starter.services', [])

  .factory('BoardService', function( $http ) {

    var _data ;

    return {
      load:function( callback )
      {
        $http({
            method: 'POST',
            url: serverUrl+'/board/findboard.do',
            data:'{}'
          }
        ).success(function (data ,status) {
            console.log( data);
            _data = data.boardList;
            callback(_data);

          }).error(function (data ,status) {
            console.log("公告 获取失败" );
          });
        return _data ;
      },

      find: function(index) {
        for( var i = 0; i< _data.length ; i++)
        {
          if( _data[i].id == index )
            return _data[i];
        }
        return _data[0];
      },
      get: function () {
        return _data;
      }
    };
  });

