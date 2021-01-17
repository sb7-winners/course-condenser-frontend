<template>
  <div class="container">
    <div class="separated-row">
      <h1 class="title">{{ title }}</h1>
      <course-info :name="courseName" :color="color" />
    </div>
    <p>{{ summary }}</p>
  </div>
</template>

<script>
import CourseInfo from "./CourseInfo.vue";

export default {
  props: {
    title: String,
    summary: String,
    courseName: String,
    color: String,
  },
  components: {
    CourseInfo,
  },
};
</script>

<style>
.container {
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
}

.separated-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.title {
  font-size: 2rem;
  font-weight: bold;
}
</style>
