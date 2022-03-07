const vm = new Vue({
  el:"#app",
  data: {
    produtos: []
  },
  filters: {
    numeroPreco(valor){
      return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    }
  },
  methods: {
    fetchProdutos(){
      fetch('./api/produtos.json')
      .then((res)=> res.json())
      .then((res)=> {
        this.produtos = res
      })
    }
  },
  created(){
    this.fetchProdutos()
  }
})