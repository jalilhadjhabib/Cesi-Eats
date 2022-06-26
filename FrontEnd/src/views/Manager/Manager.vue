<template name="clients">

  
 <div>
<nav class="navbar navbar-expand-lg" style="background:black;height:80px;">
  <a class="navbar-brand" href="/home" style="margin-left:40px;font-size:40px;color:white;font-family:Helvetica">Cesi</a>
    <a class="navbar-brand" href="/home" style="font-size:40px;color:#64F58D;font-family:Helvetica">Eats</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="nav-link waves-effect waves-light ml-auto" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i class="fa fa-bell" style="color: white;font-size: 35px;"></i>
            </a>
            <div style="width: 200px;" class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
              <p>
        <center><h4>Vos Notification</h4></center>
        <center><p 
        style="background-color: #e8dcb9;color:black;text-align:center;width:150px;font-weight: 700;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;padding: 10px;"
        >3amar hna</p></center>
      </p>
            </div>
</nav>
<div style="padding-top:150px;">

<strong><h1 style="color:black;font-weight:700;">Manager BackEnd</h1></strong>
<center><div style="padding-top:20px;width:400px;height: 200px;background-color: white;box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;">



    <input class="form-control m-1" style="width: auto;"
            v-model="ClientIDFilter"
            v-on:keyup="FilterFn()"
            placeholder="Filter by Id">
                <input class="form-control m-2" style="width: auto;"
        v-model="ClientNameFilter"
        v-on:keyup="FilterFn()"
        placeholder="Filter by Name">
<b-button b-button v-b-modal.modal-1
        class="btn btn-info m-2 fload-end" 
        data-toggle="modal"
        data-target="#exampleModal"
        @click="addClick()">
        Add Client
    </b-button>

</div></center>







<div style="overflow-x:auto;margin:40px;">
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
    <tr v-for="c in client_list">
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





















<div id="modal_div">

  <b-modal id="modal-1" hide-footer="true">
    <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>   
    <div class="modal-body">

        <div class="input-group sm-6">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" v-model="Name">
         </div>
         <div class="input-group sm-6">
            <span class="input-group-text">Mail</span>
            <input type="text" class="form-control" v-model="Mail">
         </div>
         <div class="input-group sm-6">
            <span class="input-group-text">MailStatus</span>
            <input type="text" class="form-control" v-model="MailStatus">
         </div>
         <div class="input-group sm-6">
            <span class="input-group-text">Password</span>
            <input type="text" class="form-control" v-model="Password">
         </div>
         <div class="input-group sm-6">
            <span class="input-group-text">Phone</span>
            <input type="text" class="form-control" v-model="Phone">
         </div>
         <div class="input-group sm-6">
            <span class="input-group-text">CreditCard</span>
            <input type="text" class="form-control" v-model="CreditCard">
         </div>        

    <button type="button" @click="createClick()"
    v-if="ClientID==0" class="btn btn-Success">
    Add Client
    </button>

    <button type="button" v-if="ClientID != 0" @click="updateClick()"
    class="btn btn-warning">
    Update Client
    </button>
    </div>
  </b-modal>
</div>
        
       </div>

<div style="padding-top:50px;">
<div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></div>


<footer data-aos="fade-up" class="text-light">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg- col-xl-3">
          <strong><h5>
            À propos
          </h5></strong>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <p class="mb-0">
            Cesi Eats est un service de livraison de plats cuisinés lancé par 
            A4 Oran en 2022 et basé à Oran, en Algérie. Les commandes 
            sont prises via le site web de Cesi Eats auprès 
            des restaurants partenaires et sont livrées par des coursiers indépendants.
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3">
          <strong><h5>
            Contact
          </h5></strong>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <ul class="list">
            <li><i class="fa fa-envelope mr-2"></i> contact@cesieats.dz</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
          </ul>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-3 mx-auto">
           <strong><h5>
            Retrouvez-nous sur :
          </h5></strong>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <ul class="list-unstyled">
            <li>
              <a href="#" class="fb btn" target="_blank" style="background-color: lightgray;color: white;"><i class="fa fa-facebook fa-fw fa-2x" style="" ></i></a>
            </li>
            <li>
              <br>
            <a href="#" class="twitter btn" target="_blank" style="background-color: lightgray;color: white;"><i class="fa fa-twitter fa-fw fa-2x"></i></a>
            </li>
            <li>
              <br>
            <a href="#" class="twitter btn" target="_blank" style="background-color: lightgray;color: white;"><i class="fa fa-instagram fa-fw fa-2x"></i></a>
            </li>
          </ul>
        </div>
        
        <div class="col">
          <center>
            <strong><p>Copyright © 2022. All rights reserved to Cesi Oran A4.</p></strong>
          </center>
          </div>
          </div>
          </div>
        </footer>
        </div>


</div>
</template>

<script>
const axios = require('axios');
import sqlApi from '@/services/sqlApi.js'

export default {
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
 data(){

    return{
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
methods:{
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

<style>
  @import '@/assets/css/Manager.css';
</style>