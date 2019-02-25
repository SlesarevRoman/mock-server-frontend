<template>
  <div>
    <form formnovalidate class="md-layout" @submit.prevent="dataSender">
      <md-card class="md-layout-item md-small-size-100 create-card">

        <md-card-header>
          <div class="md-title">Control</div>
        </md-card-header>

        <div class="md-card-content">
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
            <md-field>
              <label for="movie">Select endpoint</label>
              <md-select v-model="formData.endpoint">
                <md-option value="/clear">/clear</md-option>
                <md-option value="/reset">/reset</md-option>
                <md-option value="/retrieve">/retrieve</md-option>
                <md-option value="/status">/status</md-option>
                <md-option value="/bind">/bind</md-option>
                <md-option value="/stop">/stop</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item">
            <md-field>
              
              <label>Enter request URL</label>
              <md-input v-model="formData.remoteUrl"></md-input>
            </md-field>
          </div>  
        </div>
        <div class="md-layout md-gutter" v-if="formData.endpoint === '/retrieve'">
          <div class="md-layout-item">
            <md-field>
              <label for="movie">Select format</label>
              <md-select v-model="formData.format">
                <md-option value="java">java</md-option>
                <md-option value="json">json</md-option>
                <md-option value="log_entries">log_entries</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item">
            <md-field>
              <label for="movie">Select type</label>
              <md-select v-model="formData.type">
                <md-option value="logs">logs</md-option>
                <md-option value="requests">requests</md-option>
                <md-option value="recorded_expectations">recorded_expectations</md-option>
                <md-option value="active_expectations">active_expectations</md-option>
              </md-select>
            </md-field>
          </div>
        </div>

        <div 
          class="md-layout-item md-small-size-100" 
          v-if="formData.endpoint === '/retrieve' || formData.endpoint === '/clear' || formData.endpoint === '/bind'"
        >
          <md-field>
            <label for="first-name">Enter body</label>
            <md-input v-model="settings.data" autocomplete="off"/>
          </md-field>
        </div>

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary">Create Mock</md-button>
        </md-card-actions>
        </div>
      </md-card>
    </form>
    <!-- <div class="response">
      Response: {{ responseCode }}
    </div> -->
    <div>
      <tree-view :data="responseCode" :options="{maxDepth: 3}"></tree-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        endpoint: '',
        remoteUrl: '',
      },

      url: '',
      responseCode: '',
      settings: {
        "method": "PUT",
        "data": ''
      }
    }
  },
  methods: {
    dataSender() {
      console.log('get pushed');

      console.log(this.settings);
      this.settings.url = this.formData.remoteUrl + this.formData.endpoint;
      if (this.formData.endpoint == '/retrieve') {
        this.settings.url += '?type=' + this.formData.type + '&format=' + this.formData.format;
      }
      

      axios(this.settings).then((response) => {

      console.log(response);
      this.responseCode = response;


      }).catch((error) => {
      console.log(error);
      this.code = error;
      });
    }
  }
}
</script>

<style>

</style>

