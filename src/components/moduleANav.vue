<template>
	<ul>
		<li v-for="(item,index) of menu" :key="index">
			<router-link :to="item.path">{{item.name}}</router-link>
		</li>
		<li>
			<router-link to="/moduleB/index">moduleB</router-link>
		</li>
	</ul>
</template>

<script>
import routeConfig from '@/modules/moduleA/router'
export default {
	name: "moduleANav",
	data(){
		return {
			menu:routeConfig.options.routes || []
		}
	}
};
</script>

<style scoped lang="scss">

</style>
