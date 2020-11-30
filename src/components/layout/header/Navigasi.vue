<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">
		<img class="logo" alt="Vue logo" src="../../../assets/logo.png"></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item ">
					<router-link to="/" class="nav-link active px-5">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/Discover" class="nav-link px-5">Discover</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/register" class="nav-link px-5">Register</router-link>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
</template>

<script>
	export default {
	
	}
</script>

<style scoped>
	.active{
		border-radius: 25px;
		padding-left: 20px;
		background-color: #e0e2e2;
	}
	.logo{
		width: 40px
	}
</style>