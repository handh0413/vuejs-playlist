new Vue({
    el: '#vue-app', 
    data: {
      name: 'Shaun',
      job: 'Ninja',
      website: 'https://www.naver.com',
      websiteTag: '<a href="https://www.daum.net">다음</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time +  ' ' + this.name; 
        }
    }
});