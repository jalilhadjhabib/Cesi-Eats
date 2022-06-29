<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Manager</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Bienvenue sur votre espace Manager
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      
      
      <div class="section section-contacts">
        <div class="container">
            <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
            <center><h1>Manager BackEnd</h1></center>
          


<div style="padding-top:20px;">

<center><div style="padding-top:20px;background-color: white;box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
<div
          class="md-layout-item md-size-25 md-large-size-50 md-small-size-50 md-medium-size-25"
        >
<md-field style="margin: 20px;">
                      
                      <md-input v-model="ClientIDFilter"
            v-on:keyup="FilterFn()"
            placeholder="Filter by Id"></md-input>
                    </md-field>
<md-field style="margin: 20px;">
                      
                      <md-input v-model="ClientNameFilter"
        v-on:keyup="FilterFn()"
        placeholder="Filter by Name"></md-input>
                    </md-field>
            </div>
        
<md-button b-button v-b-modal.modal-1
        class="md-success" 
        data-toggle="modal"
        data-target="#exampleModal"
        @click="classicModal=true;addClick()">
        Ajouter un Client
    </md-button>

</div></center>








              
              


<modal v-if="classicModal" @close="classicModalHide" style="padding-top:50px;">
                <template slot="header" >
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" >
                  

    <div class="modal-body" >

















        <md-field style="margin: 0px;">
                      
                      <md-input v-model="Name"
            
            placeholder="Nom & Prénom"></md-input>
                    </md-field>
                    <md-field style="margin: 20px;">
                      
                      <md-input v-model="Mail"
            
            placeholder="E-mail"></md-input>
                    </md-field>
                    <md-field style="margin: 20px;">
                      
                      <md-input v-model="MailStatus"
            
            placeholder="E-mail Status"></md-input>
                    </md-field>
                    <md-field style="margin: 20px;">
                      
                      <md-input v-model="Password"
            
            placeholder="Mot de passe"></md-input>
                    </md-field>
                    <md-field style="margin: 20px;">
                      
                      <md-input v-model="Phone"
            
            placeholder="Numéro de téléphone"></md-input>
                    </md-field>
                    <md-field style="margin: 20px;">
                      
                      <md-input v-model="CreditCard"
            
            placeholder="Carte de crédit"></md-input>
                    </md-field>        

    <md-button type="button" @click="createClick()"
    v-if="ClientID==0" class="btn btn-Success">
    Ajouter un client
    </md-button>

    <button type="button" v-if="ClientID != 0" @click="updateClick()"
    class="btn btn-warning">
    Update Client
    </button>
    </div>

                </template>

                <template slot="footer">
                  <md-button
                    class="md-danger md-simple"
                    @click="classicModalHide"
                    >Close</md-button
                  >
                </template>
              </modal>  













        
       </div>
        </div>
        

<div style="overflow-x:auto;padding-top:30px;">
<table class="table bg-light" style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">
    <tr>
      <th>
            ClientID
        </th><th>
            Name
        </th>
        <th>
            Email
        </th>
        <th>
            EmailStatus
        </th>
        <th>
            Phone
        </th>
        <th>
            CreditCard
        </th>
        <th>
            ParainStatus
        </th>
        <th>
            ParainName
        </th>
        <th>
            FilleulStatus
        </th>
        <th>
            FilleulName
        </th>
        <th>
            ConnectionStatus
        </th>
        <th>
            Options
        </th>
    </tr>
    <tr v-for="c in client_list" :key="c.id">
    <td>{{c.ClientID}}</td>
    <td>{{c.Name}}</td> 
    <td>{{c.Mail}}</td> 
    <td>{{c.MailStatus}}</td> 
    <td>{{c.Phone}}</td> 
    <td>{{c.CreditCard}}</td> 
    <td>{{c.ParainStatus}}</td> 
    <td>{{c.ParainName}}</td> 
    <td>{{c.FilleulStatus}}</td> 
    <td>{{c.FilleulName}}</td> 
    <td>{{c.ConnectionStatus}}</td>
    <td>
    <b-button b-button v-b-modal.modal-1
        @click="editClick(c)" class="btn btn-warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
    </b-button>

    <b-button type="button" @click="deleteClick(c.ClientID)"
        class="btn btn-danger mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
    </b-button>
           
    </td>      
    </tr>
  
    
  </table>
</div>







      </div>
          </div>
    </div>
  </div>
  </div>
</template>







<script>
const axios = require('axios');
import sqlApi from '@/services/sqlApi.js'
import { Modal } from "@/components";

export default {
    classicModal: false,

  components: {
    Modal
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bghome.jpg")
    },
    resto: {
      type: String,
      default: require("@/assets/img/resto.png")
    },
    client: {
      type: String,
      default: require("@/assets/img/client.jpg")
    },
    livreur: {
      type: String,
      default: require("@/assets/img/livreur.jpg")
    }
  },
 data(){

    return{
                       classicModal: false,

        client_list:[],
        modalTitle:"",
        Name:"",
        ClientID:0,
        Mail:"",
        MailStatus:"",
        Password:"",
        CreditCard:"",
        Phone:"",
        ClientNameFilter:"",
        ClientIDFilter:"",
        clientsWithoutFilter:[],
        Notifications: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",

    }

},
computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
methods:{
    classicModalHide() {
      this.classicModal = false;
    },
    retrieveNotifications() {
        NotificationService.getAll()
        .then(response => {
            this.Notifications = response.data ;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },
    refreshData(){
        axios.get(sqlApi.API_URL+"clients")
        .then((response)=>{
            this.client_list=response.data;
            this.clientsWithoutFilter=response.data;    





        });
    },
    addClick(){

        this.modalTitle="Add New Client";
        this.ClientID=0;
        this.Name="";
        this.Name="";
        this.Mail="";
        this.MailStatus="";
        this.Password = "";
        this.Phone = "";
        this.CreditCard = "";
    },
    editClick(c){
        this.modalTitle="Edit Existing Client";
        this.ClientID=c.ClientID;
        this.Name=c.Name;
        this.Mail=c.Mail;
        this.MailStatus=c.MailStatus;
        this.Password = c.Password;
        this.Phone = c.Phone;
        this.CreditCard = c.CreditCard;
    },
    createClick(){
        axios.post(sqlApi.API_URL+"clients",{
            Name:this.Name,
            Mail:this.Mail,
            MailStatus:this.MailStatus,
            Password:this.Password,
            Phone:this.Phone,
            CreditCard:this.CreditCard,
            ParainStatus:"none",
            ParainName:"none",
            FilleulStatus:"none",
            FilleulName:"none",
            ConnectionStatus:false          
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        
        });
        
    },
    updateClick(){
        axios.put(sqlApi.API_URL+"clients",{
            ClientID:this.ClientID,
            Name:this.Name,
            Mail:this.Mail,
            MailStatus:this.MailStatus,
            Password:this.Password,
            Phone:this.Phone,
            CreditCard:this.CreditCard,
            ParainStatus:"none",
            ParainName:"none",
            FilleulStatus:"none",
            FilleulName:"none",
            ConnectionStatus:false 
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        
        });
        
    },
    deleteClick(id){
        if(!confirm("Are you sure ?")){
            return;
        }
       
        axios.delete(sqlApi.API_URL+"clients/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    FilterFn(){
        var ClientIDFilter=this.ClientIDFilter;
        var ClientNameFilter=this.ClientNameFilter;

        this.client_list=this.clientsWithoutFilter.filter(
            function(el){
                return el.ClientID.toString().toLowerCase().includes(
                    ClientIDFilter.toString().trim().toLowerCase()
                )&&
                el.Name.toString().toLowerCase().includes(
                    ClientNameFilter.toString().trim().toLowerCase()
                )
            });
        
    },
    sortResult(prop,asc){
        this.client_list=this.clientsWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        }) 
    }
},
mounted:function(){
    this.refreshData();
    this.retrieveNotifications();
},
created(){
        document.title = "Manager"
    }
}
</script>















<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }
  
  th, td {
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even){background-color: #f2f2f2}
</style>
