window.API = {
  post: function(url, data) {
    return Api.request('post', url, data);
  },
  get: function(url, data) {
    return Api.request('get', url, data);
  },

  request: function(method, url, data, ok) {
    $.ajax({
      type: method,
      url: url,
      data: data,
      success: function(resp){
      	if (typeof resp==='string') return ok(JSON.parse(resp));
      	ok(resp||true);
      },
      error: function(){
      	ok(null);
      }
    });
  }
}