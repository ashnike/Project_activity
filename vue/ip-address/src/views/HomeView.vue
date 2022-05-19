<template>
<div class="flex flex-col h-screen max-h-screen">
<!--search answers-->
  <div class ="z-20 flex justify-center relative bg-slate-400 px-4 pt-5 pb-32">
  
   <!-- search bar -->
   <div class="w-full max-w-screen-sm">
       <h1 class="text-white text-center font-semibold text-3xl pb-4">IP Location Finder</h1>   
      <div class=" flex">
    <input v-model="queryIp" class="flex-1 py-3 px-2 rounderd-tl-md rounded-bl-md focus:outline-none" type="text" placeholder="Enter Ip address to find location" />
<i @click="getIpinfo"   class="cursor-pointer fa-solid fa-chevron-right bg-black text-white px-4 py-4 rounderd-tr-md rounded-br-md items-center"></i>
         
      </div>
   </div>
   <!--ipinfo component-->
   <ipinfo v-if="Ipinfo" v-bind:Ipinfo="Ipinfo" />
</div>
<!--map-->
 <div id="map" class="h-full z-10"></div>
</div>
</template>



<script>
// @ is an alias to /src
 import ipinfo from "../components/ipinfo.vue";
 import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: 'HomeView',
  components: {ipinfo},
setup() {
  let map;
  const queryIp = ref("");
  const Ipinfo = ref(null);
  onMounted(() => {
  var map = leaflet.map('map').setView([51.505, -0.09], 9);

  leaflet.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=MapBOX_TOKEN", 
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'Mapbox TOKEN'
}
)
.addTo(map);
});
const getIpinfo = async() => {
  try{
    const data = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_(Api_key)&ipAddress=${queryIp.value}`);
  const result = data.data;
  Ipinfo.value={
    address:result.ip,
    state: result.location.region,
    timezone: result.location.timezone,
    isp: result.isp,
    lat: result.location.lat,
    lng:result.location.lng,
  };
    leaflet.marker([Ipinfo.value.lat, Ipinfo.value.lng]).addTo(map);
        map.setView([Ipinfo.value.lat, Ipinfo.value.lng], 13);
}
  catch(err)
  {
    alert(err.message);
  }
};
return {queryIp, Ipinfo, getIpinfo};
},
};
</script>
