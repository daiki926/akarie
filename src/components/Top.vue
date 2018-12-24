<template>

<section>
<section class="hero is-warning is-fullheight">

<nav class="level ">
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
<a class="link is-info">Top</a>
</p>
<p class="level-item has-text-centered ">
<router-link to="/Biography">Biography　</router-link>
</p>
<p class="level-item has-text-centered">
<router-link to="/Notes">Notes　</router-link>
</p>
</nav>


<div class="hero-body">
<div class="container">
<h1 class="title">
I'm Daiki
</h1>
<h2 class="subtitle">
a beginner web enginner
</h2>
</div>
</div>
</section>


<p style="margin:80px;">
<div class="a">
<img src="../assets/icon.png" alt="maru" width="100" height="100"/>
</div>
</p>


<body>
<section class="section">
<div class="container">
<h1 class="title is-1">こんにちは</h1>
<h2 class is-large="subtitle">
私は埼玉県に住んでいる情報系の学生です。c言語やjavaなどのプログラミングを主に勉強してきました。現在はweb系の勉強中であり、これが初めて作成したwebページですが、とても楽しく取り組めました。
</h2>
</div>
</section>
</body>

<br><br><br>
<center>
<div style="
width:700px;
background-color: #DDDDDD">
<div align="left">
<figure class="image is-128x128">
<img class="is-rounded" src="../assets/pencil.jpeg">
</figure>
</div>
</div>
</center>



<body>
<section class="section">
<div class="container">
<h1 class="title is-1">このページについて</h1>
<h2 class is-large ="subtitle">
なるべくシンプルな構成になるよう心がけました。情報量を減らして空白のスペースを多く取り、デザインやコピーがポップに見えるように作成してみました。
</h2>
</div>
</section>
</body>


<br><br><br>
<center>
<div style="
width:700px;
background-color: #DDDDDD">
<div align="right">
<figure class="image is-128x128">
<img class="is-rounded" src="../assets/pencil.jpeg">
</figure>
</div>
</div>
</center>


<body>
<section class="section">
<div class="container">
<h1 class="title is-1">ご用の方は</h1>
<h2 class is-large ="subtitle">
私もwebページを作成したい、何か質問したい等あれば、気軽に連絡をください。微力ですが、力になれるかもしれません。
</h2>
</div>
</section>
</body>


<p style="margin:50px;">
<a class="button is-focused is-large">
<a href="mailto:d.m926@i.softbank.jp">私にメッセージを送る</a>
<br>
<img src="../assets/mail_man.png" border="0" width="35">
</a>
</a>
</p>



</section>
</template>



<script>
export default {
name: 'hello',
data () {
return {
msg: 'ホームページ'
}
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
h1 {
font-weight: normal;
}

h2 {
font-weight: normal;
}

.container{
width: 600px
}

.a{
height:150px;
border-radius: 400px;
border:5px solid #fff;
box-shadow: 0px 0px 10px #ccc,
inset 0px 0px 10px rgba(0, 0, 0, 0.8);
text-align:center;
}



</style>
