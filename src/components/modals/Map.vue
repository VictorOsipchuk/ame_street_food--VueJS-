<template>
    <div id="modal_map" class="modal" ref="modal_map">
        <div class="modal-content">
        <h4>Карта</h4>                            
            <img src="../../assets/img/map.png" alt="">
        </div>
        
    </div>
</template>
<script>
export default {
    // name: 'map',
    mounted() {
        M.Modal.init(this.$refs.modal_map)
    }
}
</script>