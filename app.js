const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  methods: {
    fetchProdutos() {
      fetch('./api/produtos.json')
        .then((res) => res.json())
        .then((res) => {
          this.produtos = res;
        });
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((res) => res.json())
        .then((res) => {
          this.produto = res;
        });
    },
  },
  created() {
    this.fetchProdutos();
  },
});
