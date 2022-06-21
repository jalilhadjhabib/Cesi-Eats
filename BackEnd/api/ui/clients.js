const clients={template:`
<div>
    <button type="button"
        class="btn btn-primary m-2 fload-end"
        data-toggle="modal"
        data-target="#exampleModal"
        @click="addClick()">
        Add Client
    </button>


<table class="table table-striped">
<thead>
    <tr>
        <th>
            ClientId
        </th>
        <th>
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
    <button type="button"
        class="btn btn-light mr-1"
        data-toggle="modal"
        data-target="#exampleModal"
        @click="editClick(c)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
    </button>

    <button type="button"
        class="btn btn-light mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
    </button>
           
    </td>      
    </tr>
</tbody>
</table>





</div>

<div class="modal fade" id="exampleModal" tabindex="-1"
role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close">x</button>
    </div>
    
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
    v-if="ClientID==0" class="btn btn-primary">
    Add Client
    </button>

    <button type="button" v-if="ClientID != 0" @click="updateClick()"
    class="btn btn-primary">
    Update Client
    </button>
    </div>
</div>
</div>
</div>

`
,


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
        Phone:""

    }

},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"clients")
        .then((response)=>{
            this.client_list=response.data;
        });
    },
    addClick(){

        this.modalTitle="Add New Client";
        this.ClientID=0;
        this.Name="";

    },
    editClick(c){
        this.modalTitle="Edit Existing Client";
        this.ClientID=c.ClientID;
        this.Name=c.Name;
    },
    createClick(){
        axios.post(variables.API_URL+"clients",{
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
        axios.put(variables.API_URL+"clients",{
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
        
    }
},
mounted:function(){
    this.refreshData();
}
}