<template>
    
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">CesiEats | Livreur</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" >
                <div class="navbar-nav">
                    
                </div>
            </div>
        </nav>
        <CommandeList/>
    </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommandeList from '@/components/LivreurComponents/CommandeList.vue';



@Component({
  components: {
    CommandeList,
  },
})

export default class LivreurView extends Vue {
    created(){
        document.title = "Livreur | CesiEats"
    }
  }
</script>
