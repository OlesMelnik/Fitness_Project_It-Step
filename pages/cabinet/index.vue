<template>
	<section class="section">
			<!-- <card title="Free" icon="github" >
				Open source on <a href="https://github.com/buefy/buefy">GitHub</a>
			</card> -->
			Новини
			<div class="news">
				<div class="n" v-for="i in 10" v-bind:key="i">
					<div class="img">
						<img src="https://i.pinimg.com/originals/44/99/95/449995ef1ce37086e6de72835c42efcb.jpg">
					</div>
					<div class="in">
						<div class="name">Новина №{{i}}</div>
						<div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aspernatur pariatur illum eligendi libero ipsam laborum expedita porro provident error. Eveniet, harum. Dolores, eius sed earum dolore quisquam explicabo hic?</div>
						Hello
					</div>
				</div>
			</div>
	</section>
</template>

<script>
import Card from '~/components/Card'

export default {
	name: 'HomePage',

	components: {
		Card
	}
}
</script>

<style scoped>
	.news{
		width: 100%;
		display: inline-block;
	}
	.news .n{
		width: 100%;
		background: rgb(215, 240, 243);
		display: inline-block;
		overflow: hidden;
		border-radius: 20px;
		margin-top: 10px;
	}
	.news .n .img{
		width: 300px;
		float: left;
	}
	.news .n .img img{width: 100%; display: block}
	.news .n .in{
		float: left;
		width: calc(100% - 340px);
		margin-left: 20px;
		margin-top: 10px;
		padding-right: 20px;
	}
	.news .n .in .name{
		font-size: 20px;
		font-weight: 600;
	}
</style>