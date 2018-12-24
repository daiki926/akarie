<template>
<section>

<section class="hero is-success is-medium">

<nav class="level">
<p class="level-item has-text-centered">
<div style="
width:50px;
height:50px;
border-radius: 400px;
border:5px solid #fff;
box-shadow: 0px 0px 10px #ccc,
inset 0px 0px 10px rgba(0, 0, 0, 0.8);
background-color: #DDDDDD">
<img src="../assets/icon.png" alt="maru" width="29" height="29" />
</div>


<p class="level-item has-text-centered ">
<router-link to="/">Top　</router-link>
</p>
<p class="level-item has-text-centered ">
<a class ="link is-info">Biography </a>
</p>
<p class="level-item has-text-centered">
<router-link to="/Notes">Notes　</router-link>
</p>
</nav>



<div class="hero-body">
<div class="container">
<h1 class="title">
Biography
</h1>
</div>
</div>
</section>


<p style="margin:80px;">
<div class="a">
<img src="../assets/study_man.png" alt="maru" width="140" height="100"/>
</div>
</p>

<br><br><br>



<div class="content">
<h3>村松　大輝</h3>
<h4>Daiki Muramatsu</h4>
<br>
<h6>1997年9月26日生まれ。</h6>
<h6>埼玉県出身</h6>
<br>
<p>少年時代はひたすら外遊びとゲームに時間を費やした。</p>
<p>中学生では部活でやっていたバスケットボールに熱中し、高校ではバドミントン部に入部し精力的に取り組んだ。</p>
<p>体育祭にて、長縄でクラスメイト全員が飛んでいる中、自分一人が腰に手を当てて突っ立っている写真を卒業アルバムに載せられ卒業後もしばらくいじられる。</p>
<p>大学に入学し、ソフトウェア分野について勉強した。プログラミング言語は、主にc言語とjavaを学んだ。ソフトウェア開発の難しさと、完成した時の達成感の喜びを知った。現在はweb系の勉強をしている。</p>
</div>



<body>
<section class="section">
<div class="container">
<h1 class="title is-1">私が作成したプログラム</h1>
<h2 class is-large="subtitle">
作成したものを2つ紹介します。
</h2>
</div>
</section>
</body>




<section class="hero is-info is-large">
<div class="hero-body">
<div class="container">
<h1 class="title">
<article id="elemSwitch">
<button @click="active">Click Me!</button>
<div v-if="isActive"><img src="../assets/rectangle1.png" alt="maru" width="600" height="100"/></div>
<div v-else><img src="../assets/rectangle2.png" alt="maru" width="600" height="100"/></div>
</article>
長方形の作成
</h1>
<h2 class="subtitle">
GUI設計
</h2>
<p>ボードを用意し、マウスとキーボードを使って長方形の作成、削除、移動、拡大などを行うことができます。ボード状に長方形は10個までしか作ることができない等の条件をつけました。</p>



<p style="margin:50px;">
<a class="button is-focused is-large">
<a href="https://github.com/daiki926/rectangle">githubにて確認する</a>
<br>
</a>
</a>
</p>
</div>
</div>
</section>


<section class="hero is-danger is-large">
<div class="hero-body">
<div class="container">
<h1 class="title">
<article id="elemSwitch">
<button @click="active">Click Me!</button>
<div v-if="isActive"><img src="../assets/stackmachine1.png" alt="maru" width="600" height="100"/></div>
<div v-else><img src="../assets/stackmachine2.png" alt="maru" width="600" height="100"/></div>
</article>
スタックマシン
</h1>
<h2 class="subtitle">
GUI設計
</h2>
<p>中置記法の式(一般的な式)を入力し、変換ボタンを押すと後置記法に変換する。その後生成ボタンを押すとスタックマシンの命令列を作成する。ステップ実行ボタンを押すと徐々に式を読み取り、実行ボタンを押すと全て読み取られる。その後、結果が表示される。
</p>

<p style="margin:50px;">
<a class="button is-focused is-large">
<a href="https://github.com/daiki926/stackmachine">githubにて確認する</a>
<br>
</a>
</a>
</p>

</div>
</div>
</section>



</section>
</template>




<script>
export default {
name: 'Biography',
data () {
return {
isActive: true
}
},
methods: {
active: function() {
this.isActive = !this.isActive
}
}

}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
font-weight: normal;
}

.a{
height:150px;
border-radius: 400px;
border:5px solid #fff;
box-shadow: 0px 0px 10px #ccc,
inset 0px 0px 10px rgba(0, 0, 0, 0.8);
text-align:center;
}

.content{
margin: 10px auto;
width:600px;
}




</style>
