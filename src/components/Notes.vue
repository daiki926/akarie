<template>
<section>

<section class="hero is-light is-medium">

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
<router-link to="/Biography">Biography　</router-link>
</p>
<p class="level-item has-text-centered">
<a class ="link is-info">Notes </a>
</p>

</nav>



<div class="hero-body">
<div class="container">
<h1 class="title">
Notes
</h1>
</div>
</div>
</section>

<p style="margin:80px;">
<div class="a">
<img src="../assets/study.png" alt="maru" width="130" height="100"/>
</div>
</p>



<body>
<section class="section">
<div class="container">
<h1 class="title is-1">好きなことを綴ろう</h1>
<h2 class is-large="subtitle">
ここでは、質問でも何でも好きなことを書いてください。私は試したいレイアウトや要素がたくさんあるのでここに勉強のあとを残そうと思います。
</h2>
</div>
</section>
</body>






<section>
<b-message title="Info" type="is-info">
下のボタンを押すと、モーダルが起動します。
</b-message>
</section>



<section>
<button class="button is-primary is-medium"
@click="isImageModalActive = true">
画像
</button>
<button class="button is-primary is-medium"
@click="isCardModalActive = true">
カード
</button>

<b-modal :active.sync="isImageModalActive">
<p class="image is-4by3">
<img src="../assets/funny.png">
</p>
</b-modal>

<b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
<div class="card">
<div class="card-image">
<figure class="image is-4by3">
<img src="../assets/study.png" alt="Image">
</figure>
</div>
<div class="card-content">
<div class="media">
<div class="media-left">
<figure class="image is-48x48">
<img src="../assets/funny.png" alt="Image">
</figure>
</div>
<div class="media-content">
<p class="title is-4">Daiki Muramatsu</p>
<p class="subtitle is-6">@daiki</p>
</div>
</div>

<div class="content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus nec iaculis mauris. <a>@bulmaio</a>.
<a>#css</a> <a>#responsive</a>
<br>
<small>11:09 PM - 1 Jan 2016</small>
</div>
</div>
</div>
</b-modal>
</section>


<br><br><br>
<section>
<b-message title="Info" type="is-danger">
ホバーお試し
</b-message>
</section>


<div style="background: #f54785;">
<div class="container2">
<button class="btn-1"><span>Hover Me</span></button>
<button class="btn-2"><span>Hover Me</span></button>
<button class="btn-3"><span>Hover Me</span></button>
<button class="btn-4"><span>Hover Me</span></button>
<button class="btn-5"><span>Hover Me</span></button>
<button class="btn-6"><span>Hover Me</span></button>
</div>
</div>


<br><br>
<article class="media">
<div class="media-content">
<div class="field">
<p class="control">
<textarea class="textarea" placeholder="Add a comment...(送信できません)"></textarea>
</p>
</div>
<nav class="level">
<div class="level-left">
<div class="level-item">
<a class="button is-info">送信</a>
</div>
</div>
<div class="level-right">
<div class="level-item">
<label class="checkbox">
<input type="checkbox"> 送信します
</label>
</div>
</div>
</nav>
</div>
</article>

</section>


</template>



<script>

export default {
data() {
return {
isImageModalActive: false,
isCardModalActive: false,
}
}
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
font-weight: normal;
}





.container{
margin: 10px auto;
width:500px;
}


@import url(https://fonts.googleapis.com/css?family=PT+Sans);
*, *:after, *:before {
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}
body{
font-family: 'PT Sans', sans-serif;
display: table;
width: 100%;
}
.container2{
display: table-cell;
vertical-align: middle;
text-align: center;
height: 100vh;
}
button{
display: inline-block;
position: relative;
background: none;
border: none;
color: #fff;
font-size: 18px;
cursor: pointer;
margin: 20px 30px;
background: rgba(0,0,0,0.09);
}
span{
display: block;
padding: 25px 80px;
}
button::before, button::after{
content:"";
width: 0;
height: 2px;
position: absolute;
transition: all 0.2s linear;
background: #fff;
}

span::before, span::after{
content:"";
width:2px;
height:0;
position: absolute;
transition: all 0.2s linear;
background: #fff;
}
button:hover::before, button:hover::after{
width: 100%;
}
button:hover span::before, button:hover span::after{
height: 100%;
}
/*----- button 1 -----*/
.btn-1::before, .btn-1::after{
transition-delay: 0.2s;
}
.btn-1 span::before, .btn-1 span::after{
transition-delay: 0s;
}
.btn-1::before{
right: 0;
top: 0;
}
.btn-1::after{
left: 0;
bottom: 0;
}
.btn-1 span::before{
left: 0;
top: 0;
}
.btn-1 span::after{
right: 0;
bottom: 0;
}
.btn-1:hover::before, .btn-1:hover::after{
transition-delay: 0s;
}
.btn-1:hover span::before, .btn-1:hover span::after{
transition-delay: 0.2s;
}

/*--- Button 2 -------*/


.btn-2::before, .btn-2::after{
transition-delay: 0s;
}
.btn-2 span::before, .btn-2 span::after{
transition-delay: 0.2s;
}
.btn-2::before{
right: 0;
top: 0;
}
.btn-2::after{
left: 0;
bottom: 0;
}
.btn-2 span::before{
left: 0;
top: 0;
}
.btn-2 span::after{
right: 0;
bottom: 0;
}
.btn-2:hover::before, .btn-2:hover::after{
transition-delay: 0.2s;
}
.btn-2:hover span::before, .btn-2:hover span::after{
transition-delay: 0s;
}


/*----- button 3 -----*/
.btn-3::after{
left: 0;
bottom: 0;
transition-delay: 0.6s;
}
.btn-3 span::after{
transition-delay: 0.4s;
right: 0;
bottom: 0
}
.btn-3::before{
right: 0;
top: 0;
transition-delay: 0.2s;
}
.btn-3 span::before{
transition-delay: 0s;
left: 0;
top: 0;
}

.btn-3:hover::after{
transition-delay: 0s;
}
.btn-3:hover span::after{
transition-delay: 0.2s;
}
.btn-3:hover::before{
transition-delay: 0.4s;
}
.btn-3:hover span::before{
transition-delay: 0.6s;
}

/*----- button 4 -----*/
.btn-4::after{
right:0;
bottom: 0;
transition-duration: 0.4s;
}
.btn-4 span::after{
right:0;
bottom: 0;
transition-duration: 0.4s;
}
.btn-4::before{
left: 0;
top: 0;
transition-duration: 0.4s;
}
.btn-4 span::before{
left: 0;
top: 0;
transition-duration: 0.4s;
}

/*----- button 5 -----*/
.btn-5::after{
left:0;
bottom: 0;
transition-duration: 0.4s;
}
.btn-5 span::after{
right:0;
top: 0;
transition-duration: 0.4s;
}
.btn-5::before{
right: 0;
top: 0;
transition-duration: 0.4s;
}
.btn-5 span::before{
left: 0;
bottom: 0;
transition-duration: 0.4s;
}

/*----- button 6 -----*/
.btn-6::before{
left: 50%;
top: 0;
transition-duration: 0.4s;
}
.btn-6::after{
left: 50%;
bottom: 0;
transition-duration: 0.4s;
}
.btn-6 span::before{
left: 0;
top: 50%;
transition-duration: 0.4s;
}
.btn-6 span::after{
right: 0;
top: 50%;
transition-duration: 0.4s;
}
.btn-6:hover::before, .btn-6:hover::after{
left: 0;
}
.btn-6:hover span::before, .btn-6:hover span::after{
top: 0;
}



</style>
