// vue-instance 객체를 생성해야 한다.
// Vue 객체는 Vue JS에서 제공하는 기본 객체다.
new Vue({
    el: '#vue-app', // Vue 인스턴스가 Control하는 HTML 요소(Root Element)
    data: {
      name: 'Shaun'  
    } // data 프로퍼티는 Vue 인스턴스에서 사요할 데이터 정보를 관리한다.
});