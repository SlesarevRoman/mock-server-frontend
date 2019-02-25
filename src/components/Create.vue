<template>
  <div>
    <form formnovalidate class="md-layout" @submit.prevent="getMethodTest">
      <md-card class="md-layout-item md-small-size-100 create-card">
        <md-card-header>
          <div class="md-title">Create</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">Enter request URL</label>
                <md-input autocomplete="off"  v-model="settings.url" novalidate/>
              </md-field>
            </div>
          </div>
            
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label for="gender">Method</label>
                <md-select v-model="settings.data.httpRequest.method">
                  <md-option value="GET">GET</md-option>
                  <md-option value="POST">POST</md-option>
                  <md-option value="PUT">PUT</md-option>
                  <md-option value="DELETE">DELETE</md-option>
                  <md-option value="PATCH">PATCH</md-option>
                </md-select>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item ">
              <md-field>
                <label for="first-name">Path</label>
                <md-input autocomplete="off" v-model="settings.data.httpRequest.path" />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">Enter body</label>
                <md-input  autocomplete="off" v-model="settings.data.httpResponse.body" />
                
              </md-field>
            </div>
          </div>
          <md-checkbox v-model="settings.data.httpRequest.secure">Use https</md-checkbox>
        </md-card-content>

        <!-- <div class="response-code">
          Response: {{ code }}
        </div> -->

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary">Create Mock</md-button>
        </md-card-actions>
      </md-card>
    </form>
    <div>
     <tree-view :data="code" :options="{maxDepth: 3}"></tree-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  data() {
    return {
      code: '',
      settings: {
        "async": true,
        "crossDomain": true,
        "method": "PUT",
        "headers": {
          "Content-Type": "application/json"
        },
        "processData": false,
        "data": {
          "httpRequest": {
          },
          "httpResponse": {
          },
          "times": {
              "unlimited": true
          }
        }
      },
    };
  },

  methods: {
    getMethodTest() {
      console.log('get pushed');

      console.log(this.settings);

      axios(this.settings).then((response) => {

      console.log(response.status);
      this.code = response.status;


      }).catch((error) => {
      console.log(error);
      this.code = error;
      });
    }
  }
};
</script>

<style lang="scss">
  .text-area {
    width: auto;

    margin-left: 20px;
    margin-right: 20px;
  };
  .create-card {
    max-width: 960px;
    margin: 0 auto;
  };
  .response-code {
    text-align: center;
  }
  
</style>
