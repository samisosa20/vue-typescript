import { defineComponent } from "vue";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2d1dHRtYW4iLCJhIjoiY2w0aWlkMHUxMDF0dTNqbXJtazhvZXE2OSJ9.qPDpB3yEM9F02GxBWggX_Q";
var map: any;

export default defineComponent({
  name: "MapBox",
  data() {
    return {
      count: 1,
      showMyCorrd: false,
    };
  },
  created() {
    console.log(this.count, "Oli");
  },
  mounted() {
    this.locatorButtonPressed();
  },
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.createMap(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
          this.showMyCorrd = true;
          this.createMap(6.23, -75.53);
        }
      );
    },
    createMap(lat: number, lng: number) {
      map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [lng, lat], // starting position [lng, lat]
        zoom: 15, // starting zoom
      });
      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );
      map.addControl(new mapboxgl.FullscreenControl());
      // Add geolocate control to the map.
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
        })
      );
      map.addControl(new mapboxgl.NavigationControl());
    },
    viewStyleChange(e: any) {
      console.log(e.target.id);
      map.setStyle("mapbox://styles/mapbox/" + e.target.id);
    },
  },
});
