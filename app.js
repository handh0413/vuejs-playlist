new Vue({
    el: '#vue-app', 
    data: {
      name: 'Shaun',
      job: 'Ninja'
    },
    methods: {
        greet: function(time) {
            // this 키워드를 이용하여 data 프로퍼티의 데이터에 접근 가능
            return 'Good ' + time +  ' ' + this.name; 
        }
    } // Vue 인스턴스 관련 메소드를 작성할 수 있다.
});