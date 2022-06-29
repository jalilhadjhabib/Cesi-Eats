<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#">
              <i class="fab fa-twitter" style="font-size: 30px;"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-facebook-square" style="font-size: 30px;"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram" style="font-size: 30px;"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        Copyright &copy; {{ year }}. All rights reserved to Cesi Oran A4.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
