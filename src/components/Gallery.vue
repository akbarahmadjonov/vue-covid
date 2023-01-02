<!-- <template>
  <div>
    <div class="holdGallery">
      <h4>gallery</h4>
      <h1>latest gallery</h1>
      <img src="~@/assets/images/blue-line.png" alt="Blue Line" />
    </div>

    <div class="galleryItems">
      <ul>
        <li
          v-for="link in galleryLinks"
          :key="link.index"
          @click="filterOutGallery(link.index)"
          :class="{ 'active-bottom': link.isActive }"
        >
          {{ link.text }}
        </li>
      </ul>
    </div>

    <div class="gallery">
      <div class="gallery__img" v-for="image in filtered" :key="image.source">
        <img :src="image.source" :alt="image.alternative" />
      </div>
    </div>

    <img
      class="gallery__animated"
      src="~@/assets/images/Gallery-page-image_covid-19.jpg"
      alt="Rotate icon"
    />
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      // Gallery filtered links
      galleryLinks: [
        {
          text: "All",
          index: 0,
          isActive: true,
        },
        {
          text: "Medicine",
          index: 1,
          isActive: false,
        },
        {
          text: "Lab test",
          index: 2,
          isActive: false,
        },
        {
          text: "Research center",
          index: 3,
          isActive: false,
        },
        {
          text: "Consulting",
          index: 4,
          isActive: false,
        },
      ],

      // Gallery images
      galleryImages: [
        {
          source: "img/Gallery-page-image_1.jpg",
          alternative: "Rotate icon",
          index: [0, 1],
        },
        {
          source: "img/Gallery-page-image_2.jpg",
          alternative: "Second",
          index: [0, 1, 4],
        },
        {
          source: "img/Gallery-page-image_3.jpg",
          alternative: "Rotate icon",
          index: [0, 1, 3],
        },
        {
          source: "img/Gallery-page-image_4.jpg",
          alternative: "Fourth",
          index: [0, 2],
        },
        {
          source: "img/Gallery-page-image_5.jpg",
          alternative: "Fourth",
          index: [0, 2, 4],
        },
        {
          source: "img/Gallery-page-image_6.jpg",
          alternative: "Fourth",
          index: [0, 2],
        },
      ],

      // filtered gallery images array
      filtered: [],
    };
  },

  mounted() {
    // Fill filtered array with all images while component is created.
    this.filtered = this.galleryImages;
  },

  methods: {
    /**
     * Method filters all images according to selected link index.
     *
     * @param index {integer} Index of selected link.
     */
    filterOutGallery: function(index) {
      this.filtered = [];
      this.galleryLinks.forEach((el) => (el.isActive = false));
      this.galleryLinks[index].isActive = true;

      this.galleryImages.forEach((item) => {
        item.index.forEach((el) => {
          if (el === index) {
            this.filtered.push(item);
          }
        });
      });
    },
  },
};
</script>

Styles -->

<style scoped>
.holdGallery {
  text-align: center;
}

/* Related to anchor tags [border] */

.active-bottom {
  border-bottom: 2px solid #780bd5;
  border-radius: 2px;
}

/* Related to anchor tags [border] */

.holdGallery h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #780bd5;
  margin-bottom: 8px;
}

.holdGallery h1 {
  text-transform: capitalize;
  color: #333;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* Gallery Items */

.galleryItems ul {
  margin: 55px 0 0;
  display: flex;
  justify-content: center;
}

.galleryItems li {
  list-style: none;
  margin: 0 28px 28px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  color: #333333;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-decoration: none;
  background: none;
  font-size: 18px;
  font-weight: 600;
}

.galleryItems ul a {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  color: #333333;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-decoration: none;
  background: none;
  font-size: 18px;
  font-weight: 600;
}

/*
 * GALLERY ITEMS STYLES
 * Part of styles collected from .vue files in @/src/router path which are
 * gathered in one file for more relevant and logical usage.
 *
 * Added at 01.02.2021 by @akbarakhmadjonov
 */
.gallery {
  margin: 35px 0 0;
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.gallery__img img {
  margin-bottom: 25px;
  border-radius: 7px;
}

.gallery__animated {
  margin-left: 40px;
  margin-top: 20px;
  width: 80px;
  animation-name: rotateIcon;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  user-select: none;
  -webkit-user-drag: none;
}

@keyframes rotateIcon {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotateIcon {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotateIcon {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-o-keyframes rotateIcon {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}
</style> -->
