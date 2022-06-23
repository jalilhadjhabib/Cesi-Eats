<template name="clients">

  <div class="clients">
    <div>
        <Navbar />
    </div>
    <div>
 


<table class="table table-striped">
<thead>
    <tr>
        <th>
             <b-button b-button v-b-modal.modal-1
        class="btn btn-info m-2 fload-end" 
        data-toggle="modal"
        data-target="#exampleModal"
        @click="addClick()">
        Add Client
    </b-button>
            <div class ="mb-4 row" style="width: 100%;">
            <input class="form-control m-2" style="width: auto;"
            v-model="ClientIDFilter"
            v-on:keyup="FilterFn()"
            placeholder="Filter by Id">
                
            </div>
            ClientId
        </th>
        <th>
        <div class ="mb-4 row" style="width: 100%;">

        <input class="form-control m-2" style="width: auto;"
        v-model="ClientNameFilter"
        v-on:keyup="FilterFn()"
        placeholder="Filter by Name">
        
       
        </div>
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
</thead>
<tbody>

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
</tbody>
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
</div>
</div>
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
        clientsWithoutFilter:[]

    }

},
methods:{
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
    
}
}
</script>

