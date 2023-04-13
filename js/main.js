var app = new Vue({
  el:"player",
  data:{
    query:"",
    musicList:[]
  },
  methods: {
    // 搜索歌曲
    searchMusic() {
      if (this.query == 0) {
        return
      }
      axios.get('/search?keywords=' + this.query).then(response => {
        // 保存内容
        this.musicList = response.data.result.songs;

      })

      // 清空搜索
      this.query = ''
    },
  },
})