<template>
  <div class="containter" id="text-left md-6 mx-auto">
    <div class="home">
      <h1>Todo List App</h1>
      <div class="container-fluid">
        <div class="row">
          <div class="text-left md-6 mx-auto">
            <div class="form-group">
              <input
                type="text"
                placeholder="Enter your name"
                class="form-control"
                v-model="newTask"
              />
              <button
                type="button"
                class="btn btn-success"
                v-on:click="addTask"
              >
                Submit
              </button>
            </div>

            <ul class="list-group">
              <li
                button
                class="list-group-item"
                v-for="task in tasks"
                :key="task.id"
              >
                {{ task.list }}
                <span class="close">
                  <button
                    @click="editTask(task)"
                    class="btn btn-primary"
                    id="btn-1"
                  >
                    Edit</button
                  ><button
                    @click="deleteTask(task)"
                    class="btn btn-danger"
                    id="btn-2"
                  >
                    Delete
                  </button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      newTask: null,
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    addTask() {
      this.tasks.push({ newTask: this.newTask });
      this.newTask = null;
    },
    deleteTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    editTask(list, id) {
      this.id = id;
      this.task = (list, true);
      alert("alert edit");
      console.log(list);
    },
  },
};
</script>
<style>
.container-fluid {
  border: 1px solid;
  height: 400px;
  width: 50%;
}
.btn {
  width: 100%;
  margin-top: 5px;
}
.list-group {
  width: 600px;
  height: 30px;
  margin: 0;
}
#btn-1 {
  width: 40%;
}
#btn-2 {
  width: 50%;
  margin-left: 5px;
}

.form-group {
  margin-top: 40px;
}
</style>
