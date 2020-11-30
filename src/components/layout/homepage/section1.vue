<template>
	<div class="container-fluid">
		<div class="row" style="background-color: #f4f6f5">
			<div class="col-9 col-lg-6 img1 img-fluid">
				<div class="row align-items-center" style="height: 100%">
					<div class="col-9 col-md-8 col-lg-6 ml-auto text-left">
						<h4><b>Booked Tool</b> enable you to create Interactive Advertisment</h4>
						<button class="btn btn-primary">What is it?</button>
					</div>
					<div class="col-3 col-md-4"></div>
				</div>
			</div>
			<div class="col-6 col-lg-7 img2 position-absolute img-fluid"></div>
		</div>
		<div class="row py-3" style="background-color: #e2e3e4;">
			<div class="col-12 col-md-8 m-auto">
				<div class="row align-items-center">
					<div class="col-4 text-left">Please Loigin to start using <h2>Booked Tool</h2></div>
					<div class="col-8 ">
						<form class="form-inline">
							<input class="form-control m-2" type="email" placeholder="Email">
							<input class="form-control m-2" type="password" placeholder="Password">
							<button class=" btn btn-primary m-2 px-4">Login</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.img1{
		height: 300px;
		width: 100%;
		background-image: url(../../../assets/Untitled-6.png);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: center top;
	}
	.img2{
		right: 0px;
		height: 270px;
		width: 100%;
		background-image: url(../../../assets/Untitled-5.png);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: center top;
	}
</style>