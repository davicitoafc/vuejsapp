<template>
    <div id="vuecomp">
        <div class="divflex">

                <div class="divflex" >
                    <div v-show="comp == 'vuetools'" class="divframe">
                        <vuetools/>
                     </div>
                </div>
        </div>
    </div>
</template>

<script>
    import VueTools from './VueTools.vue'

    export default {
        data() {
            return {
                comp: 'vuetools'
            }
        },
        methods: {
            vercomp: function (name) {
                this.comp = name;
            }
        },
        components: {
            vuetools: VueTools
        }
    }

</script>

<style>

</style>
