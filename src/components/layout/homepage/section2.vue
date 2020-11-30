<template>
	<div class="container py-5">
		<div class="row">
			<div class="col-12 col-md-4 m-auto">
				<img src="../../../assets/presentation.svg" style="height: 40px">
				<h2 class="text-uppercase pt-3">discover</h2>
				<h5 class="text-uppercase pb-4">Booked Tool</h5>
			</div>
		</div>
		<div class="row">
			<div class="col-12 col-md-10 col-lg-8 col-xl-6 m-auto">
				<div id="img1" class="imgconten" style="display: block">
					<img src="../../../assets/Untitled-1.png" class="rounded imge">
				</div>
				<div id="img2" class="imgconten">
					<img src="../../../assets/Untitled-2.png" class="rounded imge">
				</div>
				<div id="img3" class="imgconten">
					<img src="../../../assets/Untitled-3.png" class="rounded imge">
				</div>
				<div id="img4" class="imgconten">
					<img src="../../../assets/Untitled-4.png" class="rounded imge">
				</div>

				<div class="tab btn-group">
					<button class="tablinks" @click="OnDiscover($event, 'Discover1', 'img1')">Discover A</button>
					<button class="tablinks" @click="OnDiscover($event, 'Discover2', 'img2')">Discover B</button>
					<button class="tablinks" @click="OnDiscover($event, 'Discover3', 'img3')">Discover C</button>
					<button class="tablinks" @click="OnDiscover($event, 'Discover4', 'img4')">Discover D</button>
				</div>

				<div id="Discover1" class="tabcontent text-justify" style="display: block;">
					<p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				<div id="Discover2" class="tabcontent text-justify">
					<p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				<div id="Discover3" class="tabcontent text-justify">
					<p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				<div id="Discover4" class="tabcontent text-justify">
					<p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return{
		}
	},
	methods: {
		OnDiscover(event, link, img){
			var i, tabcontent, tablinks, imgconten;
			tabcontent = document.getElementsByClassName("tabcontent");
			imgconten = document.getElementsByClassName("imgconten");
			for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
				imgconten[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablinks");
			for (i = 0; i < tablinks.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(" active", "");
			}
			document.getElementById(link).style.display = "block";
			document.getElementById(img).style.display = "block";
			event.currentTarget.className += " active";
		}
	},
}
</script>

<style scoped>
.imge{
	width: 100%
}
.img1{
	height: 400px;
	background-color: black
}
.img2{
	right: 0px;
	height: 300px;
	background-color: red
}
.tab {
	overflow: hidden;
	border-bottom: grey 1px solid;
	/*border: 1px solid #ccc;*/
	/*background-color: #f1f1f1;*/
}
.tab button {
  background-color: inherit;
  float: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}
.tab button:hover {
  border-bottom: solid 5px #4790cd;
}
.tabcontent {
  display: none;
  padding: 6px 12px;
  /*border: 1px solid #ccc;
  border-top: none;*/
}
.imgconten {
  display: none;
  padding: 6px 12px;
  /*border: 1px solid #ccc;
  border-top: none;*/
}
</style>