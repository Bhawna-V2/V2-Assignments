<template>
<div class="modal" tabindex="-1" role="dialog" style="display: block;">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('onClose')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you really want to add task!!!!!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="$emit('addDataList')">Yes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('onClose')">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <!-- <div class="modal" id="myModal" style="display: block;" v-show="myModel">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog">
          <div class="modal-content">
            <!- Modal Header ->
            <div class="modal-header">
              <!- <h4 class="modal-title">Modal Heading</h4> ->
              <button
                type="button"
                class="close"
                @click.prevent="$emit('closeModal')"
                data-dismiss="modal"
              >
                ×
              </button>
            </div>
            <!- Modal body ->
            <div class="modal-body">
              <slot>Ar</slot>
            </div>
            <!- Modal footer ->
            <div class="modal-footer">
              <button
                type="button"
                @click.prevent="$emit('addTaskModal')"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                Yes
              </button> 
              <button
                type="button"
                @click.prevent="$emit('closeModal')"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  // props: ['myModel'],
//   computed: {
//       modalShow() {
//         return  this.myModel;
//       }
//   },
  // data() {
  //   return {
  //       name: "Modal",
  //   }
  // },
  // setup() {
  //   function closeModal() {
  //     $emit('onClose');
  //   }
  //   function addData() {
  //     $emit('addDataList');
  //   }
  //   return (closeModal,addData);
  // }
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>